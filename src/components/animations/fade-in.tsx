"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  once?: boolean;
}

export default function FadeIn({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.5,
  once = true,
}: FadeInProps) {
  const directionMap = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  };

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once }}
    >
      {children}
    </motion.div>
  );
}
