"use client";

import type React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { crossFade, springUI } from "@/lib/motion";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageTransition({
  children,
  className,
}: PageTransitionProps) {
  const reduced = useReducedMotion();

  // Enter and exit run the same path in reverse, so a page you leave
  // retreats the way it arrived.
  const hidden = reduced ? { opacity: 0 } : { opacity: 0, y: 8 };

  return (
    <motion.div
      className={cn(className)}
      initial={hidden}
      animate={{ opacity: 1, y: 0 }}
      exit={hidden}
      transition={reduced ? crossFade : springUI}
    >
      {children}
    </motion.div>
  );
}
