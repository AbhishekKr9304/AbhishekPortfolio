"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const SESSION_KEY = "ak-xr-booted";

const bootLines = [
  "XR RUNTIME ............ OK",
  "6DoF TRACKING ......... OK",
  "PASSTHROUGH ........... OK",
  "HAND TRACKING ......... OK",
  "SPATIAL ANCHORS ....... LOADED",
];

/**
 * A headset-style boot screen shown once per browser session. It is rendered
 * on the server so it covers the page from the first paint, then removes
 * itself at once for returning visitors and reduced-motion users.
 */
export function BootSequence() {
  const [visible, setVisible] = useState(true);
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // Storage blocked: just play the intro
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let lineTimer: number | undefined;
    let doneTimer: number | undefined;
    // Defer by a frame so React doesn't flag a synchronous cascade
    const startTimer = window.setTimeout(() => {
      if (seen || reduce) {
        setVisible(false);
        return;
      }
      lineTimer = window.setInterval(() => setLineCount((n) => n + 1), 210);
      doneTimer = window.setTimeout(() => setVisible(false), bootLines.length * 210 + 650);
    }, 0);

    return () => {
      window.clearTimeout(startTimer);
      window.clearInterval(lineTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  const progress = Math.min(lineCount / bootLines.length, 1);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="boot"
          role="status"
          aria-label="Loading"
          className="boot-screen fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
          initial={{ clipPath: "circle(150% at 50% 50%)" }}
          transition={{ duration: 0.9, ease: [0.7, 0, 0.3, 1] }}
        >
          {/* Lens vignette */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 45%, color-mix(in srgb, var(--color-foreground) 18%, transparent) 100%)",
            }}
          />
          <div className="relative w-[min(88vw,26rem)] font-mono text-xs text-muted">
            <div className="mb-6 flex items-center justify-between text-accent">
              <span className="tracking-[0.3em]">AK // XR OS</span>
              <span>{Math.round(progress * 100).toString().padStart(3, "0")}%</span>
            </div>
            <ul className="space-y-1.5">
              {bootLines.slice(0, lineCount).map((line) => (
                <motion.li
                  key={line}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="text-accent">›</span> {line}
                </motion.li>
              ))}
            </ul>
            <div className="mt-6 h-px w-full bg-border">
              <motion.div
                className="h-px origin-left bg-accent"
                animate={{ scaleX: progress }}
                transition={{ duration: 0.25 }}
              />
            </div>
            <button
              type="button"
              onClick={() => setVisible(false)}
              className="mt-6 text-muted underline-offset-4 hover:text-accent hover:underline"
            >
              Skip intro
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
