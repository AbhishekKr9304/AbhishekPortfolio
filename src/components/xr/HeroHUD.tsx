"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

function Corner({ className }: { className: string }) {
  return (
    <motion.span
      className={`absolute h-6 w-6 border-accent/70 md:h-10 md:w-10 ${className}`}
      initial={{ opacity: 0, scale: 1.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}

/**
 * Passthrough-style headset overlay for the hero: viewfinder corners plus
 * live readouts of pointer position, scroll depth and frame rate.
 */
export function HeroHUD() {
  const posRef = useRef<HTMLSpanElement>(null);
  const depthRef = useRef<HTMLSpanElement>(null);
  const [fps, setFps] = useState(72);

  useEffect(() => {
    // Write readouts straight to the DOM so pointer moves don't re-render React
    const handleMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = -(event.clientY / window.innerHeight - 0.5) * 2;
      if (posRef.current) {
        posRef.current.textContent = `X ${x.toFixed(2).padStart(5)}  Y ${y.toFixed(2).padStart(5)}  Z 1.60`;
      }
    };
    const handleScroll = () => {
      if (depthRef.current) depthRef.current.textContent = `${(window.scrollY / 100).toFixed(2)}m`;
    };

    let frames = 0;
    let last = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      frames += 1;
      if (now - last >= 1000) {
        setFps(Math.round((frames * 1000) / (now - last)));
        frames = 0;
        last = now;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-4 z-0 font-mono text-[10px] uppercase tracking-widest text-muted md:inset-10 md:text-xs"
    >
      <Corner className="left-0 top-0 border-l-2 border-t-2" />
      <Corner className="right-0 top-0 border-r-2 border-t-2" />
      <Corner className="bottom-0 left-0 border-b-2 border-l-2" />
      <Corner className="bottom-0 right-0 border-b-2 border-r-2" />

      <motion.div
        className="absolute left-3 top-14 hidden flex-col gap-1 md:left-14 md:top-16 sm:flex"
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <span className="flex items-center gap-2 text-accent">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Tracking · 6DoF
        </span>
        <span ref={posRef}>X  0.00  Y  0.00  Z 1.60</span>
      </motion.div>

      <motion.div
        className="absolute bottom-14 right-3 hidden flex-col items-end gap-1 md:bottom-16 md:right-14 sm:flex"
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span>
          Depth <span ref={depthRef} className="text-foreground">0.00m</span>
        </span>
        <span>
          FPS <span className="text-foreground">{fps}</span>
        </span>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 md:bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span>Scroll to enter</span>
        <motion.span
          className="block h-8 w-px bg-gradient-to-b from-accent to-transparent"
          animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
