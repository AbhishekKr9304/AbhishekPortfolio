"use client";

import { createContext, useContext, useMemo, useState, useSyncExternalStore } from "react";
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
  const [listeners] = useState(() => new Set<() => void>());
  // The server can't see the stored preference, so hydrate as muted (the
  // AudioManager default) and switch to the stored value right after.
  const muted = useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => manager.isMuted(),
    () => true,
  );

  const value = useMemo<SoundContextValue>(
    () => ({
      muted,
      toggleMuted: () => {
        manager.setMuted(!manager.isMuted());
        listeners.forEach((listener) => listener());
      },
      play: (key: SoundKey) => manager.play(key),
    }),
    [muted, manager, listeners],
  );

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

export function useSound(): SoundContextValue {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used within a SoundProvider");
  return ctx;
}
