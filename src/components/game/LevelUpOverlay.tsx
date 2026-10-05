"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useGame } from "@/lib/game/GameProvider";
import { gameStore } from "@/lib/game/store";
import { ParticleBurst } from "./ParticleBurst";

export function LevelUpOverlay() {
  const { levelUp, cheatActive } = useGame();

  useEffect(() => {
    if (!levelUp) return;
    const timer = window.setTimeout(() => gameStore.clearLevelUp(), 2600);
    return () => window.clearTimeout(timer);
  }, [levelUp]);

  return (
    <>
      <AnimatePresence>
        {levelUp && (
          <motion.div
            key={levelUp.level}
            role="status"
            className="pointer-events-none fixed inset-0 z-[85] grid place-items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-accent)_18%,transparent),transparent_60%)]" />
            <ParticleBurst />
            <div className="relative text-center" style={{ perspective: "800px" }}>
              <motion.p
                className="font-mono text-xs uppercase tracking-[0.5em] text-accent"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                Level {levelUp.level}
              </motion.p>
              <motion.h2
                className="mt-2 text-6xl font-black uppercase italic tracking-tight text-foreground md:text-8xl"
                style={{ textShadow: "0 0 30px var(--color-accent)" }}
                initial={{ rotateX: -90, scale: 0.6, opacity: 0 }}
                animate={{ rotateX: 0, scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 220, damping: 14 }}
              >
                Level Up!
              </motion.h2>
              <motion.p
                className="mt-3 text-lg font-semibold text-muted"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                Rank unlocked: <span className="text-foreground">{levelUp.title}</span>
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cheat code: a burst of gold and a brief rainbow shift over the page */}
      <AnimatePresence>
        {cheatActive && (
          <motion.div
            key="cheat"
            aria-hidden="true"
            className="cheat-overlay pointer-events-none fixed inset-0 z-[84]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ParticleBurst color="var(--color-warn)" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
