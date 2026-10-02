"use client";

import { Html } from "@react-three/drei";
import { useWorkspace } from "@/components/workspace/WorkspaceContext";
import { useSound } from "@/lib/sound/SoundProvider";
import { workstationObjects } from "@/data/workstationObjects";
import { AppContent, appTitles } from "@/components/os/AppContent";

export function ScreenContent({
  objectId,
  position,
  widthPx,
  heightPx,
}: {
  objectId: string;
  position: [number, number, number];
  widthPx: number;
  heightPx: number;
  worldWidth: number;
}) {
  const { activeApp, activeCategoryFilter, focusedObjectId, openApp, closeApp } = useWorkspace();
  const { play } = useSound();
  const config = workstationObjects.find((o) => o.id === objectId);
  const isActive = focusedObjectId === objectId && activeApp === config?.appId;

  return (
    <Html center position={position} distanceFactor={1.75} occlude={false}>
      <div
        style={{ width: widthPx, height: heightPx, pointerEvents: "auto" }}
        className="overflow-hidden rounded-[2px] bg-[#070809] font-sans"
      >
        {isActive ? (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-white/10 bg-[#0c0d10] px-5 py-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent/80">
                  Abhishek OS
                </p>
                <h2 className="text-sm font-semibold text-white">
                  {config && appTitles[config.appId]}
                </h2>
              </div>
              <button
                type="button"
                onClick={closeApp}
                className="flex h-7 w-7 items-center justify-center rounded-full text-white/50 hover:bg-white/10 hover:text-white"
              >
                ×
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-5 text-[13px] leading-snug">
              {config && <AppContent appId={config.appId} categoryFilter={activeCategoryFilter} />}
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => {
              if (!config) return;
              play("click");
              openApp(config.appId, objectId, { categoryFilter: config.projectCategoryFilter });
            }}
            className="flex h-full w-full cursor-pointer flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#0a0f14] via-[#0b0d12] to-[#0e0a14] transition-colors hover:from-[#0d141a] hover:to-[#11101a]"
          >
            <span className="h-2 w-2 rounded-full bg-accent/70" />
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/40">
              Abhishek OS
            </p>
            <p className="font-mono text-[10px] text-white/20">Click to open · {config?.description}</p>
          </button>
        )}
      </div>
    </Html>
  );
}
