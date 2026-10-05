"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { useSound } from "@/lib/sound/SoundProvider";
import { playChiptune } from "./chiptune";
import { zones } from "./quests";
import { gameStore } from "./store";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a",
];

export function useGame() {
  return useSyncExternalStore(gameStore.subscribe, gameStore.getSnapshot, gameStore.getServerSnapshot);
}

/** Watches the page and feeds game events into the store. Renders nothing. */
export function GameTracker() {
  const pathname = usePathname();
  const { muted } = useSound();
  const mutedRef = useRef(muted);

  useEffect(() => {
    mutedRef.current = muted;
  }, [muted]);

  useEffect(() => {
    gameStore.soundHandler = (sound) => {
      if (!mutedRef.current) playChiptune(sound);
    };
    return () => {
      gameStore.soundHandler = null;
    };
  }, []);

  // Zone discovery: a section counts once a good part of it is on screen
  useEffect(() => {
    if (pathname !== "/" || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) gameStore.discover(entry.target.id);
        });
      },
      { threshold: 0.3 },
    );
    zones.forEach((zone) => {
      const el = document.getElementById(zone.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  // Contact links complete the "Open a Channel" quest
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a");
      if (link && link.closest("#contact, footer")) gameStore.unlock("signal");
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // ↑ ↑ ↓ ↓ ← → ← → B A
  useEffect(() => {
    let position = 0;
    const handleKey = (event: KeyboardEvent) => {
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      position = key === KONAMI[position] ? position + 1 : key === KONAMI[0] ? 1 : 0;
      if (position === KONAMI.length) {
        position = 0;
        gameStore.activateCheat();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return null;
}

/** Drop into a page to record that a project case study was opened. */
export function ProjectVisit({ slug }: { slug: string }) {
  useEffect(() => {
    gameStore.viewProject(slug);
  }, [slug]);
  return null;
}
