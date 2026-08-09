"use client";

import { useEffect } from "react";

/**
 * Drives the cursor-following spotlight on `.card-premium` surfaces by
 * setting --mx/--my/--spot CSS variables (consumed in globals.css).
 * Event-delegated so it works for cards rendered by server components.
 * No-op on touch devices and under reduced motion.
 *
 * Writes are batched into a single requestAnimationFrame so the highlight is
 * updated once per displayed frame rather than once per pointer event — a
 * fast mouse fires several moves per frame, and the extra style writes are
 * layout work nobody ever sees.
 */
export default function CursorSpotlight() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let active: HTMLElement | null = null;
    let pending: { card: HTMLElement | null; x: number; y: number } | null =
      null;
    let frame = 0;

    const flush = () => {
      frame = 0;
      if (!pending) return;
      const { card, x, y } = pending;
      pending = null;

      if (active && active !== card) {
        active.style.setProperty("--spot", "0");
      }
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${x - r.left}px`);
        card.style.setProperty("--my", `${y - r.top}px`);
        card.style.setProperty("--spot", "1");
      }
      active = card;
    };

    const onMove = (e: MouseEvent) => {
      const card = (e.target as Element | null)?.closest?.(
        ".card-premium"
      ) as HTMLElement | null;

      pending = { card, x: e.clientX, y: e.clientY };
      if (!frame) frame = requestAnimationFrame(flush);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      document.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
