"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StaggerInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right";
  as?: React.ElementType;
  once?: boolean;
}

export default function StaggerIn({
  children,
  className,
  delay = 0,
  staggerDelay = 0.1,
  direction = "up",
  as: Component = "div",
  once = true,
}: StaggerInProps) {
  const directionMap = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, ...directionMap[direction] },
    show: { opacity: 1, x: 0, y: 0 },
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
