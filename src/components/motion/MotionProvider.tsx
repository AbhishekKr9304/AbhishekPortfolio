"use client";

import { MotionConfig } from "motion/react";

// "user" drops transform animations (keeping fades) when the OS asks for reduced motion.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
