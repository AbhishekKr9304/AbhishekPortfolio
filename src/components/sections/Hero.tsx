"use client";

import dynamic from "next/dynamic";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import { useParallax } from "@/lib/motion/useParallax";
import { HeroHUD } from "@/components/xr/HeroHUD";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), { ssr: false });

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: -60 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const nameLetters = "Abhishek Kumar".split("");

export function Hero() {
  const sectionRef = useParallax<HTMLElement>();
  const reduceMotion = useReducedMotion() ?? false;
  const inView = useInView(sectionRef, { margin: "100px" });

  // 0 while the hero fills the screen, 1 once it has scrolled fully away
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });
  const contentRotateX = useTransform(progress, [0, 1], [0, 35]);
  const contentScale = useTransform(progress, [0, 1], [1, 0.82]);
  const contentY = useTransform(progress, [0, 1], [0, 160]);
  const contentOpacity = useTransform(progress, [0, 0.7], [1, 0]);
  const sceneScale = useTransform(progress, [0, 1], [1, 1.35]);
  const sceneOpacity = useTransform(progress, [0, 0.9], [1, 0]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
      style={{ perspective: "1000px" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, color-mix(in srgb, var(--color-accent) 15%, transparent), transparent 60%)",
          transform:
            "translate3d(calc(var(--parallax-x, 0) * -10px), calc(var(--parallax-y, 0) * -10px), 0)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in srgb, var(--color-border) 60%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--color-border) 60%, transparent) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          transform:
            "translate3d(calc(var(--parallax-x, 0) * 6px), calc(var(--parallax-y, 0) * 6px), 0)",
        }}
      />
      <HeroHUD />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ scale: sceneScale, opacity: sceneOpacity }}
      >
        <div className="h-full w-full opacity-60 md:opacity-90">
          <HeroScene active={inView} reduceMotion={reduceMotion} />
        </div>
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-col items-center"
        variants={container}
        initial="hidden"
        animate="visible"
        style={{
          rotateX: contentRotateX,
          scale: contentScale,
          y: contentY,
          opacity: contentOpacity,
          transformOrigin: "50% 0%",
          transformStyle: "preserve-3d",
        }}
      >
        <motion.p
          variants={item}
          className="font-mono text-sm uppercase tracking-[0.3em] text-accent"
        >
          AR • VR • MR • Interactive Experiences
        </motion.p>

        <motion.h1
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.035 } } }}
          aria-label="Abhishek Kumar"
          className="mt-6 text-[length:var(--text-display)] font-bold leading-[0.95] text-foreground [perspective:600px]"
        >
          {nameLetters.map((letter, index) => (
            <motion.span
              key={index}
              aria-hidden="true"
              variants={{
                hidden: { opacity: 0, y: 60, rotateX: -90, rotateY: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  rotateY: 0,
                  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="inline-block origin-bottom"
            >
              {letter === " " ? " " : letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2 variants={item} className="mt-4 text-xl font-medium text-muted md:text-2xl">
          XR Developer
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-balance text-base text-muted md:text-lg"
        >
          I build immersive experiences that connect people, technology and the
          physical world.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-accent-strong"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-[border-color,color,transform] hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
