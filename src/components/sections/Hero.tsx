"use client";

import { useParallax } from "@/lib/motion/useParallax";

export function Hero() {
  const parallaxRef = useParallax<HTMLDivElement>();

  return (
    <section
      id="hero"
      ref={parallaxRef}
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

      <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">
        AR • VR • MR • Interactive Experiences
      </p>

      <h1 className="mt-6 text-[length:var(--text-display)] font-bold leading-[0.95] text-foreground">
        Abhishek Kumar
      </h1>

      <h2 className="mt-4 text-xl font-medium text-muted md:text-2xl">
        XR Developer
      </h2>

      <p className="mt-6 max-w-2xl text-balance text-base text-muted md:text-lg">
        I build immersive experiences that connect people, technology and the
        physical world.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#projects"
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent-strong"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
