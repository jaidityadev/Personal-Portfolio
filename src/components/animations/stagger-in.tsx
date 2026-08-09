"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { crossFade, spring } from "@/lib/motion";

interface StaggerInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
}

export default function StaggerIn({
  children,
  className,
  delay = 0,
  staggerDelay = 0.1,
  direction = "up",
  once = true,
}: StaggerInProps) {
  const reduced = useReducedMotion();

  const directionMap = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  };

  const offset = reduced ? {} : directionMap[direction];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        // Tighten the cascade under reduced motion so the sequence doesn't linger.
        staggerChildren: reduced ? staggerDelay / 2 : staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, ...offset },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: reduced ? crossFade : spring.default,
    },
  };

  return (
    <motion.div
      className={cn(className)}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once }}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={item}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
