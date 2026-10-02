"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { AudioManager } from "./AudioManager";
import type { SoundKey } from "./sounds";

interface SoundContextValue {
  muted: boolean;
  toggleMuted: () => void;
  play: (key: SoundKey) => void;
}

const SoundContext = createContext<SoundContextValue | null>(null);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [manager] = useState(() => new AudioManager());
  const [muted, setMuted] = useState(() => manager.isMuted());

  const value = useMemo<SoundContextValue>(
    () => ({
      muted,
      toggleMuted: () => {
        const next = !manager.isMuted();
        manager.setMuted(next);
        setMuted(next);
      },
      play: (key: SoundKey) => manager.play(key),
    }),
    [muted, manager],
  );

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

export function useSound(): SoundContextValue {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used within a SoundProvider");
  return ctx;
}
