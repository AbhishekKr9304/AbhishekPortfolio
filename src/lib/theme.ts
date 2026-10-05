"use client";

import { useSyncExternalStore } from "react";
import { THEME_STORAGE_KEY } from "./themeScript";

export type Theme = "dark" | "light";

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function useTheme(): Theme {
  return useSyncExternalStore(subscribe, getTheme, () => "dark");
}

export function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Choice just won't persist
  }
  listeners.forEach((listener) => listener());
}
