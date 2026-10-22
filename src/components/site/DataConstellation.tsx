import { useEffect, useRef, type RefObject } from "react";

type Pt = {
  hx: number;
  hy: number;
  x: number;
  y: number;
  r: number;
  phase: number;
  speed: number;
  amp: number;
  accent: boolean;
};

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function gauss(rand: () => number) {
  let u = 0;
  let v = 0;
  while (u === 0) u = rand();
  while (v === 0) v = rand();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

/**
 * A lightweight canvas "feature space": three soft clusters of points that
 * drift, connect to neighbours, and lean away from the pointer.
 * Pauses offscreen; renders a single static frame under reduced motion.
 */
export function DataConstellation({ readoutRef }: { readoutRef?: RefObject<HTMLSpanElement | null> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let pts: Pt[] = [];
    let raf = 0;
    let running = false;
    let visible = true;
    const mouse = { x: 0, y: 0, active: false };
    let colors = { fg: "#2a2826", accent: "#2f5bff" };

    const readColors = () => {
      const s = getComputedStyle(document.documentElement);
      colors = {
        fg: s.getPropertyValue("--foreground").trim() || colors.fg,
        accent: s.getPropertyValue("--primary").trim() || colors.accent,
      };
    };

    const build = () => {
      const rand = mulberry32(42);
      const count = Math.round(clamp((width * height) / 5200, 36, 110));
      const centers = [
        { x: 0.32, y: 0.34 },
        { x: 0.7, y: 0.42 },
        { x: 0.46, y: 0.74 },
      ];
      const spread = Math.min(width, height) * 0.15;
      pts = Array.from({ length: count }, (_, i) => {
        const noise = i % 7 === 6;
        const c = centers[i % 3]!;
        const hx = noise ? rand() * width : clamp(c.x * width + gauss(rand) * spread, 10, width - 10);
        const hy = noise ? rand() * height : clamp(c.y * height + gauss(rand) * spread, 10, height - 10);
        return {
          hx,
          hy,
          x: hx,
          y: hy,
          r: 1.1 + rand() * 1.5,
          phase: rand() * Math.PI * 2,
          speed: 0.00025 + rand() * 0.0004,
          amp: 3 + rand() * 7,
          accent: !noise && i % 3 === 0,
        };
      });
    };

    const draw = (t: number) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      const R = Math.min(width, height) * 0.24;

      for (const p of pts) {
        let tx = p.hx + Math.cos(t * p.speed + p.phase) * p.amp;
        let ty = p.hy + Math.sin(t * p.speed * 1.3 + p.phase) * p.amp;
        if (mouse.active && !reduce) {
          const dx = tx - mouse.x;
          const dy = ty - mouse.y;
          const d = Math.hypot(dx, dy) || 1;
          if (d < R) {
            const f = (1 - d / R) * 22;
            tx += (dx / d) * f;
            ty += (dy / d) * f;
          }
        }
        if (reduce) {
          p.x = tx;
          p.y = ty;
        } else {
          p.x += (tx - p.x) * 0.07;
          p.y += (ty - p.y) * 0.07;
        }
      }

      const link = Math.min(width, height) * 0.16;
      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i]!;
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j]!;
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > link) continue;
          const both = a.accent && b.accent;
          ctx.globalAlpha = (1 - d / link) * (both ? 0.4 : 0.13);
          ctx.strokeStyle = both ? colors.accent : colors.fg;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      if (mouse.active && !reduce) {
        ctx.strokeStyle = colors.accent;
        for (const p of pts) {
          const d = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (d > R * 1.15) continue;
          ctx.globalAlpha = (1 - d / (R * 1.15)) * 0.45;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        }
        ctx.globalAlpha = 0.7;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 5, 0, Math.PI * 2);
        ctx.stroke();
      }

      for (const p of pts) {
        ctx.globalAlpha = p.accent ? 0.95 : 0.55;
        ctx.fillStyle = p.accent ? colors.accent : colors.fg;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.accent ? p.r + 0.6 : p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const loop = (t: number) => {
      if (!running) return;
      draw(t);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (reduce || running || !visible) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      build();
      draw(performance.now());
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
      if (readoutRef?.current) {
        readoutRef.current.textContent = `x ${(mouse.x / width).toFixed(2)} · y ${(1 - mouse.y / height).toFixed(2)}`;
      }
    };
    const onLeave = () => {
      mouse.active = false;
    };

    readColors();
    resize();
    start();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      visible = !!entry?.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(canvas);
    const mo = new MutationObserver(() => {
      readColors();
      draw(performance.now());
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [readoutRef]);

  return <canvas ref={canvasRef} aria-hidden className="absolute inset-0 size-full touch-pan-y" />;
}
