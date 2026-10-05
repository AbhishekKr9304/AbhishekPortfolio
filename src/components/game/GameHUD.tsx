"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { useGame } from "@/lib/game/GameProvider";
import { gameStore } from "@/lib/game/store";
import { levelFor, quests, zones } from "@/lib/game/quests";

function XpBar({ progress, className = "" }: { progress: number; className?: string }) {
  return (
    <div className={`h-1.5 overflow-hidden rounded-full bg-border ${className}`}>
      <motion.div
        className="h-full origin-left rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]"
        initial={false}
        animate={{ scaleX: progress }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      />
    </div>
  );
}

export function GameHUD() {
  const game = useGame();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { level, title, progress, nextAt } = levelFor(game.xp);
  const completed = game.unlocked.length;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const zoneHref = (id: string) => (pathname === "/" ? `#${id}` : `/#${id}`);

  return (
    <>
      {/* Player chip */}
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Level ${level} ${title}, ${game.xp} XP. Open quest log`}
        className="fixed bottom-6 left-4 z-40 flex items-center gap-3 rounded-full border border-border bg-surface/90 py-1.5 pl-1.5 pr-1.5 text-left backdrop-blur transition-colors hover:border-accent md:left-6 md:pr-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.6, duration: 0.5 }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.96 }}
      >
        <span className="relative grid h-10 w-10 place-items-center">
          <svg viewBox="0 0 40 40" className="absolute inset-0 -rotate-90" aria-hidden="true">
            <circle cx="20" cy="20" r="17" fill="none" stroke="var(--color-border)" strokeWidth="3" />
            <motion.circle
              cx="20"
              cy="20"
              r="17"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={false}
              animate={{ pathLength: progress }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            />
          </svg>
          <span className="font-mono text-[11px] font-bold text-foreground">LV{level}</span>
        </span>
        <span className="hidden min-w-[8rem] flex-col gap-1 md:flex">
          <span className="flex items-baseline justify-between gap-3">
            <span className="text-xs font-semibold text-foreground">{title}</span>
            <span className="font-mono text-[10px] text-muted">{game.xp} XP</span>
          </span>
          <span className="flex items-center gap-2 font-mono text-[10px] text-muted">
            <span>◈ {game.discovered.length}/{zones.length}</span>
            <span>★ {completed}/{quests.length}</span>
          </span>
        </span>
      </motion.button>

      {/* Quest log */}
      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(event) => event.target === event.currentTarget && setOpen(false)}
        className="m-auto max-h-[90vh] w-[min(92vw,40rem)] overflow-y-auto rounded-2xl border border-border bg-surface p-0 text-foreground backdrop:bg-black/75 backdrop:backdrop-blur-sm"
      >
        {open && (
          <motion.div
            className="p-6 md:p-8"
            initial={{ opacity: 0, scale: 0.92, rotateX: 18 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            style={{ transformPerspective: 1000 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Quest Log</p>
                <h2 className="mt-1 text-2xl font-bold">
                  LV{level} · {title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close quest log"
                className="h-8 w-8 rounded-full text-lg hover:bg-surface-elevated"
              >
                ×
              </button>
            </div>

            <div className="mt-4">
              <XpBar progress={progress} />
              <p className="mt-2 font-mono text-xs text-muted">
                {game.xp} XP{nextAt ? ` · ${nextAt - game.xp} XP to next rank` : " · Max rank reached"}
              </p>
            </div>

            <h3 className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              World map · {game.discovered.length}/{zones.length} zones
            </h3>
            <ul className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
              {zones.map((zone, index) => {
                const found = game.discovered.includes(zone.id);
                return (
                  <motion.li
                    key={zone.id}
                    initial={{ opacity: 0, scale: 0.6, rotateY: 90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ delay: 0.1 + index * 0.03, type: "spring", stiffness: 260, damping: 20 }}
                  >
                    {found ? (
                      <a
                        href={zoneHref(zone.id)}
                        onClick={() => setOpen(false)}
                        className="flex h-full flex-col rounded-lg border border-accent/50 bg-accent/10 p-2 transition-colors hover:bg-accent/20"
                      >
                        <span className="font-mono text-[10px] text-accent">{zone.number}</span>
                        <span className="text-xs font-medium">{zone.label}</span>
                      </a>
                    ) : (
                      <span className="flex h-full flex-col rounded-lg border border-dashed border-border p-2 text-muted">
                        <span className="font-mono text-[10px]">{zone.number}</span>
                        <span className="text-xs">??? Locked</span>
                      </span>
                    )}
                  </motion.li>
                );
              })}
            </ul>

            <h3 className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Quests · {completed}/{quests.length}
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {quests.map((quest, index) => {
                const done = game.unlocked.includes(quest.id);
                const concealed = quest.hidden && !done;
                return (
                  <motion.li
                    key={quest.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + index * 0.04 }}
                    className={`flex items-center gap-3 rounded-lg border p-3 ${
                      done ? "border-accent/50 bg-accent/5" : "border-border"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-md text-sm ${
                        done ? "bg-accent text-background" : "bg-surface-elevated text-muted"
                      }`}
                    >
                      {done ? "✓" : concealed ? "?" : "★"}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className={`block text-sm font-semibold ${done ? "text-foreground" : "text-muted"}`}>
                        {concealed ? "Secret quest" : quest.title}
                      </span>
                      <span className="block text-xs text-muted">
                        {concealed ? "Old-school players know the code." : quest.description}
                      </span>
                    </span>
                    <span className={`font-mono text-xs ${done ? "text-accent" : "text-muted"}`}>
                      {quest.xp} XP
                    </span>
                    <span className="sr-only">{done ? "Completed" : "Not completed"}</span>
                  </motion.li>
                );
              })}
            </ul>

            <div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-4">
              <p className="text-xs text-muted">Progress is saved in this browser.</p>
              <button
                type="button"
                onClick={() => gameStore.reset()}
                className="rounded-full border border-border px-4 py-2 text-xs text-muted hover:border-warn hover:text-warn"
              >
                Reset progress
              </button>
            </div>
          </motion.div>
        )}
      </dialog>
    </>
  );
}
