"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { crossFade, springUI } from "@/lib/motion";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  distance?: number;
  once?: boolean;
}

export default function FadeIn({
  children,
  className,
  direction = "up",
  delay = 0,
  distance = 16,
  once = true,
}: FadeInProps) {
  const reduced = useReducedMotion();

  const offset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  }[direction];

  // Reduced motion keeps the reveal — it just loses the travel.
  const from = reduced ? { opacity: 0 } : { opacity: 0, ...offset };

  return (
    <motion.div
      className={cn(className)}
      initial={from}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ ...(reduced ? crossFade : springUI), delay }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
    >
      {children}
    </motion.div>
  );
}
