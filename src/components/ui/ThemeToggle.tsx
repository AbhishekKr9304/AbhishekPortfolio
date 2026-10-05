"use client";

import { flushSync } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { setTheme, useTheme, type Theme } from "@/lib/theme";

export function ThemeToggle() {
  const theme = useTheme();
  const next: Theme = theme === "dark" ? "light" : "dark";
  const label = `Switch to ${next} mode`;

  const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduceMotion) {
      setTheme(next);
      return;
    }

    // The new theme spreads out from the button like a portal opening
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    const transition = document.startViewTransition(() => {
      flushSync(() => setTheme(next));
    });
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 650, easing: "cubic-bezier(0.7, 0, 0.3, 1)", pseudoElement: "::view-transition-new(root)" },
      );
    });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.svg
          key={theme}
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {theme === "dark" ? (
            // Moon: currently dark
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          ) : (
            // Sun: currently light
            <>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </>
          )}
        </motion.svg>
      </AnimatePresence>
    </button>
  );
}
