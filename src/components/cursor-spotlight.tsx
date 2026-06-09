"use client";

import { useEffect } from "react";

/**
 * Drives the cursor-following spotlight on `.card-premium` surfaces by
 * setting --mx/--my/--spot CSS variables (consumed in globals.css).
 * Event-delegated so it works for cards rendered by server components.
 * No-op on touch devices.
 */
export default function CursorSpotlight() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    let active: HTMLElement | null = null;

    const onMove = (e: MouseEvent) => {
      const card = (e.target as Element | null)?.closest?.(
        ".card-premium"
      ) as HTMLElement | null;

      if (active && active !== card) {
        active.style.setProperty("--spot", "0");
      }
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
        card.style.setProperty("--spot", "1");
      }
      active = card;
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return null;
}
