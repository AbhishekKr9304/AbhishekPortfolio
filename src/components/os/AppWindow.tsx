"use client";

import { useWorkspace } from "@/components/workspace/WorkspaceContext";
import { screenObjectIds } from "@/data/workstationObjects";
import { AppContent, appTitles } from "./AppContent";

export function AppWindow() {
  const { activeApp, activeCategoryFilter, focusedObjectId, closeApp } = useWorkspace();

  // Screens render their app content in-scene on the physical monitor instead.
  if (!activeApp || screenObjectIds.includes(focusedObjectId ?? "")) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-end justify-center p-4 md:items-center md:p-10">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeApp}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="app-window-title"
        className="relative flex max-h-[80vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Abhishek OS
            </p>
            <h2 id="app-window-title" className="text-base font-semibold text-foreground">
              {appTitles[activeApp]}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeApp}
            aria-label="Close window"
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted hover:bg-surface-elevated hover:text-foreground"
          >
            ×
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">
          <AppContent appId={activeApp} categoryFilter={activeCategoryFilter} />
        </div>
      </div>
    </div>
  );
}
