"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

const GLYPHS = "!<>-_\\/[]{}=+*^?#01ΔΣΩ";

/**
 * Decodes text from random glyphs the first time it scrolls into view,
 * like a HUD label resolving. Screen readers always get the final text.
 */
export function ScrambleText({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [output, setOutput] = useState(text);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const totalFrames = 22;
    let frame = 0;
    const timer = window.setInterval(() => {
      frame += 1;
      const resolved = Math.floor((frame / totalFrames) * text.length);
      setOutput(
        text
          .split("")
          .map((char, i) =>
            i < resolved || char === " " ? char : GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
          )
          .join(""),
      );
      if (frame >= totalFrames) {
        window.clearInterval(timer);
        setOutput(text);
      }
    }, 35);
    return () => window.clearInterval(timer);
  }, [inView, reduceMotion, text]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{output}</span>
    </span>
  );
}
