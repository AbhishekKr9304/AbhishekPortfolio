"use client";

import { motion } from "motion/react";

// Fixed pseudo-random spread so renders stay deterministic
const particles = Array.from({ length: 36 }, (_, i) => {
  const angle = (i / 36) * Math.PI * 2 + ((i * 7) % 5) * 0.08;
  const distance = 160 + ((i * 53) % 140);
  return {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
    size: 4 + ((i * 11) % 6),
    delay: ((i * 13) % 10) / 100,
  };
});

export function ParticleBurst({ color = "var(--color-accent)" }: { color?: string }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-sm"
          style={{ width: p.size, height: p.size, background: color, boxShadow: `0 0 8px ${color}` }}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
          animate={{ x: p.x, y: p.y, opacity: 0, scale: 0.3, rotate: 180 }}
          transition={{ duration: 1.1, delay: p.delay, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </div>
  );
}
