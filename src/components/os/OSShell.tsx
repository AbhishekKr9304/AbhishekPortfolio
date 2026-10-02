"use client";

import { useEffect, useState } from "react";
import { useWorkspace } from "@/components/workspace/WorkspaceContext";
import { SoundToggle } from "@/components/ui/SoundToggle";
import { AppWindow } from "./AppWindow";
import { AppLauncher } from "./AppLauncher";

export function OSShell() {
  const { activeApp, closeApp } = useWorkspace();
  const [launcherOpen, setLauncherOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (launcherOpen) setLauncherOpen(false);
        else if (activeApp) closeApp();
        return;
      }
      if (event.key === "Tab" && !activeApp) {
        event.preventDefault();
        setLauncherOpen((open) => !open);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeApp, closeApp, launcherOpen]);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5 md:px-10">
        <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-border bg-surface/80 px-4 py-2 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <p className="font-mono text-xs tracking-wide text-foreground">
            ABHISHEK <span className="text-muted">· XR DEVELOPER ·</span> SYSTEM ONLINE
          </p>
        </div>
        <div className="pointer-events-auto flex items-center gap-3">
          <SoundToggle />
          <button
            type="button"
            onClick={() => setLauncherOpen(true)}
            className="flex h-10 items-center rounded-full border border-border bg-surface/80 px-4 text-sm font-medium text-foreground backdrop-blur hover:border-accent hover:text-accent"
          >
            Launch
          </button>
        </div>
      </div>

      <p className="pointer-events-none fixed bottom-5 left-1/2 z-20 -translate-x-1/2 text-center font-mono text-[11px] text-muted">
        Click an object to explore · TAB to launch · ESC to return
      </p>

      <AppWindow />
      <AppLauncher
        open={launcherOpen}
        onClose={() => setLauncherOpen(false)}
      />
    </>
  );
}
