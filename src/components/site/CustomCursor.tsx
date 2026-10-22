import { useEffect, useRef } from "react";

/** Ring cursor for mouse users; grows over links, buttons and cards. Off for touch and reduced motion. */
export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let x = -100, y = -100, cx = -100, cy = -100, raf = 0;
    const loop = () => {
      cx += (x - cx) * 0.22;
      cy += (y - cy) * 0.22;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x = e.clientX;
      y = e.clientY;
      el.dataset["visible"] = "true";
      const t = e.target as Element | null;
      el.dataset["hover"] = t?.closest("a, button, [role='button'], article.group, input") ? "true" : "false";
    };
    const onLeave = () => (el.dataset["visible"] = "false");
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <div ref={ref} aria-hidden className="cursor-ring hidden md:block" />;
}
