"use client";

import { useSound } from "@/lib/sound/SoundProvider";

export function SoundToggle() {
  const { muted, toggleMuted } = useSound();

  return (
    <button
      type="button"
      aria-pressed={!muted}
      onClick={toggleMuted}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
      title={muted ? "Enable sound" : "Mute sound"}
    >
      <span aria-hidden="true">{muted ? "🔇" : "🔊"}</span>
      <span className="sr-only">{muted ? "Enable sound" : "Mute sound"}</span>
    </button>
  );
}
