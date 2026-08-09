"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { crossFade, spring } from "@/lib/motion";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  /** Spring response in seconds (not a fixed duration — the spring settles on its own). */
  duration?: number;
  once?: boolean;
}

export default function FadeIn({
  children,
  className,
  direction = "up",
  delay = 0,
  duration,
  once = true,
}: FadeInProps) {
  const reduced = useReducedMotion();

  const directionMap = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  };

  // Reduced motion keeps the fade and drops the travel.
  const offset = reduced ? {} : directionMap[direction];
  const transition = reduced
    ? { ...crossFade, delay }
    : { ...spring.default, ...(duration ? { duration } : {}), delay };

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={transition}
      viewport={{ once }}
    >
      {children}
    </motion.div>
  );
}
