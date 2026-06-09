"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ01<>/#$%&";

interface DecodeTextProps {
  text: string;
  className?: string;
  /** total animation time in ms */
  duration?: number;
}

/**
 * Resolves text from scrambled glyphs left-to-right, once, on mount.
 * Renders plain text for reduced-motion users and before hydration.
 */
export default function DecodeText({
  text,
  className,
  duration = 900,
}: DecodeTextProps) {
  const [display, setDisplay] = useState(text);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const revealed = Math.floor(t * text.length);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (i < revealed || ch === " " || ch === "·") {
          out += ch;
        } else {
          out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }
      setDisplay(out);
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [text, duration]);

  return (
    <span className={className} aria-label={text}>
      {display}
    </span>
  );
}
