"use client";

import { AnimatePresence, motion } from "motion/react";
import { useGame } from "@/lib/game/GameProvider";
import { gameStore, type ToastKind } from "@/lib/game/store";

const icons: Record<ToastKind, string> = { zone: "◈", quest: "★", cheat: "⚡" };

export function GameToasts() {
  const { toasts } = useGame();

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed right-4 top-20 z-[80] flex w-[min(20rem,calc(100vw-2rem))] flex-col gap-2 md:right-6"
      style={{ perspective: "800px" }}
    >
      <AnimatePresence initial={false}>
        {toasts.map((toast) => (
          <motion.button
            key={toast.id}
            type="button"
            layout
            onClick={() => gameStore.dismissToast(toast.id)}
            initial={{ opacity: 0, x: 80, rotateY: -60 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: 80, rotateY: 45, transition: { duration: 0.25 } }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className={`pointer-events-auto relative flex items-center gap-3 overflow-hidden rounded-lg border bg-surface/95 px-4 py-3 text-left shadow-lg backdrop-blur ${
              toast.kind === "cheat" ? "border-warn" : "border-accent/60"
            }`}
          >
            <span
              aria-hidden="true"
              className={`grid h-9 w-9 shrink-0 place-items-center rounded-md text-lg ${
                toast.kind === "cheat" ? "bg-warn/15 text-warn" : "bg-accent/15 text-accent"
              }`}
            >
              {icons[toast.kind]}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                {toast.label}
              </span>
              <span className="block truncate text-sm font-semibold text-foreground">{toast.title}</span>
            </span>
            {toast.xp && (
              <span className="font-mono text-sm font-bold text-accent">+{toast.xp} XP</span>
            )}
            {/* Countdown bar */}
            <motion.span
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-accent/60"
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 3.4, ease: "linear" }}
            />
          </motion.button>
        ))}
      </AnimatePresence>
    </div>
  );
}
