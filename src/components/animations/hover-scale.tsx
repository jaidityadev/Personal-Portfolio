"use client";

import type React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { spring } from "@/lib/motion";

interface HoverScaleProps {
  children: React.ReactNode;
  className?: string;
  scale?: number;
}

export default function HoverScale({
  children,
  className,
  scale = 1.02,
}: HoverScaleProps) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={cn(className)}>{children}</div>;

  return (
    <motion.div
      className={cn(className)}
      whileHover={{ scale }}
      // Press feedback lands on pointer-down, not on release.
      whileTap={{ scale: 0.98 }}
      transition={spring.snappy}
    >
      {children}
    </motion.div>
  );
}
