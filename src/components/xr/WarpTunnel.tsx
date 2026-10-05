"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

const RING_COUNT = 9;

function Ring({ index, progress }: { index: number; progress: MotionValue<number> }) {
  // Each ring starts deep in z-space and rushes toward the viewer while scrolling
  const start = -1600 + index * 180;
  const z = useTransform(progress, [0, 1], [start, start + 1400]);
  const opacity = useTransform(z, [-1600, -400, 0, 200], [0, 0.6, 0.35, 0]);
  const rotate = useTransform(progress, [0, 1], [index * 12, index * 12 + 90]);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 h-[min(80vw,40rem)] w-[min(80vw,40rem)] -translate-x-1/2 -translate-y-1/2 rounded-[30%] border border-accent"
      style={{ z, opacity, rotate }}
    />
  );
}

/** Concentric frames flying toward the viewer: a portal behind the contact call-to-action. */
export function WarpTunnel() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      style={{ perspective: "600px" }}
    >
      <div className="absolute inset-0 [transform-style:preserve-3d]">
        {Array.from({ length: RING_COUNT }, (_, index) => (
          <Ring key={index} index={index} progress={scrollYProgress} />
        ))}
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 0%, var(--color-background) 75%)",
        }}
      />
    </div>
  );
}
