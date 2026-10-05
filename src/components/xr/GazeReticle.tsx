"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const INTERACTIVE = "a, button, [role='button'], summary, [data-reticle]";

/**
 * A VR-style gaze reticle that replaces the mouse cursor on desktop. Over
 * links and buttons it expands and fills a ring, like a dwell-to-select timer.
 */
export function GazeReticle() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [hidden, setHidden] = useState(true);
  const layerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-reticle");

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setHidden(false);
      const target = event.target as Element | null;
      setHovering(Boolean(target?.closest?.(INTERACTIVE)));
    };
    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);
    const handleLeave = () => setHidden(true);

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerdown", handleDown);
    window.addEventListener("pointerup", handleUp);
    document.documentElement.addEventListener("pointerleave", handleLeave);
    return () => {
      document.documentElement.classList.remove("has-reticle");
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
      document.documentElement.removeEventListener("pointerleave", handleLeave);
    };
  }, [enabled, x, y]);

  // Modal dialogs render in the browser's top layer, above any z-index. The
  // reticle lives in the top layer as a popover, and is re-shown whenever a
  // dialog opens so it is stacked above that dialog.
  useEffect(() => {
    const layer = layerRef.current;
    if (!enabled || !layer || typeof layer.showPopover !== "function") return;

    const raise = () => {
      if (layer.matches(":popover-open")) layer.hidePopover();
      layer.showPopover();
    };
    raise();

    const observer = new MutationObserver((mutations) => {
      const dialogOpened = mutations.some(
        (m) => m.target instanceof HTMLDialogElement && m.target.open,
      );
      if (dialogOpened) raise();
    });
    observer.observe(document.body, { subtree: true, attributes: true, attributeFilter: ["open"] });

    return () => {
      observer.disconnect();
      if (layer.matches(":popover-open")) layer.hidePopover();
    };
  }, [enabled]);

  if (!enabled) return null;

  const size = hovering ? 52 : 30;

  return (
    <div
      ref={layerRef}
      popover="manual"
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[90] m-0 h-full max-h-none w-full max-w-none overflow-visible border-0 bg-transparent p-0"
    >
      {/* Center dot tracks exactly */}
      <motion.div
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-accent"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: hidden ? 0 : 1, scale: pressed ? 0.5 : 1 }}
      />
      {/* Outer ring trails slightly behind */}
      <motion.div
        className="absolute left-0 top-0"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: size, height: size, opacity: hidden ? 0 : 1, scale: pressed ? 0.85 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        <svg viewBox="0 0 40 40" className="h-full w-full -rotate-90 overflow-visible">
          <circle cx="20" cy="20" r="18" fill="none" stroke="var(--color-accent)" strokeOpacity="0.35" strokeWidth="1.5" />
          <motion.circle
            cx="20"
            cy="20"
            r="18"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={false}
            animate={{ pathLength: hovering ? 1 : 0 }}
            transition={{ duration: hovering ? 0.6 : 0.2, ease: "easeOut" }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
