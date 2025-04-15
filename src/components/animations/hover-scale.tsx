"use client";

import type React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HoverScaleProps {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  duration?: number;
}

export default function HoverScale({
  children,
  className,
  scale = 1.02,
  duration = 0.2,
}: HoverScaleProps) {
  return (
    <motion.div
      className={cn(className)}
      whileHover={{ scale }}
      transition={{ duration, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
