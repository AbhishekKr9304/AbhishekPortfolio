"use client";

import { useEffect, useRef } from "react";
import { useWorkspace } from "@/components/workspace/WorkspaceContext";
import { workstationObjects } from "@/data/workstationObjects";

export function AppLauncher({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { openApp } = useWorkspace();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      aria-label="Application launcher"
      className="m-auto w-[min(90vw,32rem)] rounded-2xl border border-border bg-surface p-8 text-foreground backdrop:bg-black/70"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Launch</h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close launcher"
          className="h-8 w-8 rounded-full hover:bg-surface-elevated"
        >
          ×
        </button>
      </div>
      <p className="mt-2 text-xs text-muted">
        Keyboard-accessible alternative to clicking objects in the 3D workspace.
      </p>
      <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {workstationObjects.map((config) => (
          <li key={config.id}>
            <button
              type="button"
              onClick={() => {
                openApp(config.appId, config.id, { categoryFilter: config.projectCategoryFilter });
                onClose();
              }}
              className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-surface-elevated hover:text-accent"
            >
              <span className="block font-medium">{config.description}</span>
              <span className="block text-xs text-muted">via {config.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </dialog>
  );
}
