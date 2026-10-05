"use client";

import { motion, type TargetAndTransition } from "motion/react";

type RevealVariant = "rise" | "flip" | "left" | "right" | "zoom";

const variants: Record<
  RevealVariant,
  { hidden: TargetAndTransition; origin: string }
> = {
  // Tilts up out of the page, like a card standing up
  rise: { hidden: { opacity: 0, y: 48, rotateX: 24, scale: 0.96 }, origin: "50% 100%" },
  // Hinged at the top edge, swings down into place
  flip: { hidden: { opacity: 0, y: 24, rotateX: -75 }, origin: "50% 0%" },
  // Swings in from the side around the vertical axis
  left: { hidden: { opacity: 0, x: -64, rotateY: 28 }, origin: "0% 50%" },
  right: { hidden: { opacity: 0, x: 64, rotateY: -28 }, origin: "100% 50%" },
  // Pushes forward from deep in z-space
  zoom: { hidden: { opacity: 0, scale: 0.8, z: -240 }, origin: "50% 50%" },
};

const visible: TargetAndTransition = {
  opacity: 1,
  x: 0,
  y: 0,
  z: 0,
  scale: 1,
  rotateX: 0,
  rotateY: 0,
};

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  variant = "rise",
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  variant?: RevealVariant;
}) {
  const { hidden, origin } = variants[variant];

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: delayMs / 1000 }}
      style={{ transformPerspective: 1200, transformOrigin: origin }}
    >
      {children}
    </motion.div>
  );
}
