"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { crossFade, springUI } from "@/lib/motion";

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

  const offset = {
    up: { y: 16 },
    down: { y: -16 },
    left: { x: 16 },
    right: { x: -16 },
  }[direction];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: reduced ? staggerDelay / 2 : staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, ...offset },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: reduced ? crossFade : springUI,
    },
  };

  return (
    <motion.div
      className={cn(className)}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={item}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
