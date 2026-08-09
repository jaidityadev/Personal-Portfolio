"use client";

import type React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { crossFade, spring } from "@/lib/motion";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageTransition({
  children,
  className,
}: PageTransitionProps) {
  const reduced = useReducedMotion();

  // Enter and exit travel the same path, so a page leaves the way it arrived.
  const offset = reduced ? {} : { y: 10 };

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, ...offset }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, ...offset }}
      transition={reduced ? crossFade : spring.default}
    >
      {children}
    </motion.div>
  );
}
