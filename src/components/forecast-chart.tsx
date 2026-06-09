"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * A self-drawing forecast chart: solid historical line, then a dashed
 * forecast continuation with a confidence band fanning out — a nod to
 * the ensemble forecasting research. Pure SVG, animates once on view.
 */
export default function ForecastChart() {
  const reduced = useReducedMotion();

  const draw = (delay: number, duration: number) =>
    reduced
      ? {}
      : {
          initial: { pathLength: 0 },
          whileInView: { pathLength: 1 },
          viewport: { once: true },
          transition: { delay, duration, ease: "easeInOut" as const },
        };

  const fade = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          transition: { delay, duration: 0.8 },
        };

  return (
    <div className="card-premium p-4">
      <svg
        viewBox="0 0 280 120"
        className="w-full h-auto"
        role="img"
        aria-label="Illustration: a time-series forecast with confidence interval"
      >
        {/* baseline */}
        <line
          x1="10"
          y1="108"
          x2="270"
          y2="108"
          stroke="hsl(var(--border))"
          strokeWidth="1"
        />
        {/* "today" separator */}
        <motion.line
          x1="160"
          y1="14"
          x2="160"
          y2="108"
          stroke="hsl(var(--muted-foreground))"
          strokeOpacity="0.35"
          strokeWidth="1"
          strokeDasharray="3 4"
          {...fade(1.0)}
        />
        {/* confidence band */}
        <motion.path
          d="M160,45 L270,10 L270,44 Z"
          fill="hsl(var(--primary))"
          fillOpacity="0.12"
          {...fade(1.6)}
        />
        {/* historical line */}
        <motion.path
          d="M10,95 L40,80 L70,88 L100,62 L130,70 L160,45"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...draw(0.4, 1.1)}
        />
        {/* forecast line */}
        <motion.path
          d="M160,45 C195,36 230,30 270,24"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="5 5"
          {...draw(1.5, 0.9)}
        />
        {/* last observed point */}
        <motion.circle
          cx="160"
          cy="45"
          r="3.5"
          fill="hsl(var(--primary))"
          {...fade(1.4)}
        />
      </svg>
      <div className="flex items-center justify-between mt-2">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          ensemble_forecast.R
        </span>
        <span className="font-mono text-[10px] text-primary">
          95% CI
        </span>
      </div>
    </div>
  );
}
