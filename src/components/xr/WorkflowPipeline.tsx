"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import type { WorkflowStep } from "@/data/workflow";

/**
 * The workflow as a render pipeline: a beam of light travels along the track
 * as you scroll, and each stage powers on when the beam reaches it.
 */
export function WorkflowPipeline({ steps }: { steps: WorkflowStep[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 45%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const [activeCount, setActiveCount] = useState(0);

  useMotionValueEvent(progress, "change", (value) => {
    // Stage i lights when the beam passes its position on the track
    const count = Math.min(steps.length, Math.floor(value * steps.length + 0.35));
    setActiveCount((current) => (current === count ? current : count));
  });

  return (
    <div ref={ref} className="relative">
      {/* Track */}
      <div aria-hidden="true" className="absolute left-[19px] top-0 bottom-0 w-px bg-border md:left-0 md:right-0 md:top-[19px] md:bottom-auto md:h-px md:w-auto" />
      {/* Beam — vertical on mobile, horizontal on desktop */}
      <motion.div
        aria-hidden="true"
        className="absolute left-[19px] top-0 bottom-0 w-px origin-top bg-accent shadow-[0_0_12px_var(--color-accent)] md:hidden"
        style={{ scaleY: progress }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-0 right-0 top-[19px] hidden h-px origin-left bg-accent shadow-[0_0_12px_var(--color-accent)] md:block"
        style={{ scaleX: progress }}
      />

      <ol className="relative grid gap-8 md:auto-cols-fr md:grid-flow-col md:gap-3">
        {steps.map((step, index) => {
          const active = index < activeCount;
          return (
            <li key={step.id} className="flex items-center gap-4 md:flex-col md:items-start md:gap-4">
              <motion.span
                className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border bg-background font-mono text-xs"
                animate={{
                  borderColor: active ? "var(--color-accent)" : "var(--color-border)",
                  color: active ? "var(--color-background)" : "var(--color-muted)",
                  backgroundColor: active ? "var(--color-accent)" : "var(--color-background)",
                  scale: active ? 1 : 0.85,
                  rotateY: active ? 0 : 180,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                style={{ transformPerspective: 400 }}
              >
                {String(index + 1).padStart(2, "0")}
                {active && (
                  <motion.span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full border border-accent"
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                )}
              </motion.span>
              <motion.span
                className="text-sm font-medium"
                animate={{
                  color: active ? "var(--color-foreground)" : "var(--color-muted)",
                  y: active ? 0 : 6,
                  opacity: active ? 1 : 0.5,
                }}
                transition={{ duration: 0.4 }}
              >
                {step.label}
              </motion.span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
