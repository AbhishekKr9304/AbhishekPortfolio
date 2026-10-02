"use client";

import { useEffect, useState } from "react";
import { useSound } from "@/lib/sound/SoundProvider";
import { projects } from "@/data/projects";
import { workstationObjects } from "@/data/workstationObjects";

const stages = [
  { id: "env", label: "3D Environment" },
  { id: "audio", label: "Audio System" },
  { id: "os", label: "Portfolio System" },
  { id: "db", label: "Project Database" },
] as const;

export function EntryScreen({ onEnter }: { onEnter: () => void }) {
  const [readyStages, setReadyStages] = useState<Set<string>>(new Set());
  const [systemReady, setSystemReady] = useState(false);
  const { play } = useSound();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const checks: Record<(typeof stages)[number]["id"], boolean> = {
      env: typeof WebGLRenderingContext !== "undefined",
      audio: true,
      os: workstationObjects.length > 0,
      db: projects.length > 0,
    };

    const delay = reduceMotion ? 0 : 160;
    const timers = stages.map((stage, index) =>
      setTimeout(() => {
        if (!checks[stage.id]) return;
        setReadyStages((prev) => new Set(prev).add(stage.id));
      }, delay * index),
    );

    const readyTimer = setTimeout(
      () => setSystemReady(true),
      delay * stages.length + 150,
    );

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(readyTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background px-6 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 60%, color-mix(in srgb, var(--color-accent) 10%, transparent), transparent 55%)",
        }}
      />

      {!systemReady ? (
        <div className="relative flex flex-col items-center gap-6">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">
            Initializing XR Workspace
          </p>
          <ul className="flex flex-col gap-2 text-left font-mono text-xs text-muted">
            {stages.map((stage) => (
              <li key={stage.id} className="flex items-center gap-3">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    readyStages.has(stage.id) ? "bg-accent" : "bg-border"
                  }`}
                />
                <span className={readyStages.has(stage.id) ? "text-foreground" : ""}>
                  {stage.label}
                </span>
                {readyStages.has(stage.id) && <span className="text-accent">OK</span>}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="relative flex flex-col items-center gap-6">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">
            AR • VR • MR • Interactive Experiences
          </p>
          <h1 className="text-[length:var(--text-display)] font-bold leading-[0.95] text-foreground">
            Abhishek Kumar
          </h1>
          <h2 className="text-xl font-medium text-muted md:text-2xl">XR Developer</h2>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            System Ready
          </p>
          <button
            type="button"
            onClick={() => {
              play("transition");
              onEnter();
            }}
            className="mt-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-wider text-background transition-colors hover:bg-accent-strong"
          >
            Enter Workspace
          </button>
        </div>
      )}
    </div>
  );
}
