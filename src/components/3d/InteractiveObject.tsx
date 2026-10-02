"use client";

import { useRef, useState } from "react";
import type { Group } from "three";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useWorkspace } from "@/components/workspace/WorkspaceContext";
import { useSound } from "@/lib/sound/SoundProvider";
import type { WorkstationObjectConfig } from "@/types/workstation";

export function InteractiveObject({
  config,
  children,
}: {
  config: WorkstationObjectConfig;
  children: React.ReactNode;
}) {
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  const { hoveredObjectId, setHoveredObjectId, focusedObjectId, openApp } = useWorkspace();
  const { play } = useSound();

  const isActiveHover = hoveredObjectId === config.id;
  const isFocused = focusedObjectId === config.id;

  useFrame(() => {
    const group = groupRef.current;
    if (!group) return;
    const targetScale = isActiveHover || isFocused ? 1.06 : 1;
    // Snap once close enough so the transform (and any Html children's CSS
    // matrix) stops being recomputed every frame while idle.
    if (Math.abs(group.scale.x - targetScale) < 0.0005) {
      group.scale.setScalar(targetScale);
      return;
    }
    const next = group.scale.x + (targetScale - group.scale.x) * 0.15;
    group.scale.setScalar(next);
  });

  return (
    <group
      ref={groupRef}
      position={config.position}
      rotation={config.rotation ?? [0, 0, 0]}
      onPointerOver={(event) => {
        event.stopPropagation();
        setHovered(true);
        setHoveredObjectId(config.id);
        play("hover");
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={(event) => {
        event.stopPropagation();
        setHovered(false);
        if (hoveredObjectId === config.id) setHoveredObjectId(null);
        document.body.style.cursor = "auto";
      }}
      onClick={(event) => {
        event.stopPropagation();
        play("click");
        openApp(config.appId, config.id, { categoryFilter: config.projectCategoryFilter });
      }}
    >
      {children}
      {hovered && !isFocused && (
        <Html center distanceFactor={8} position={[0, 0.55, 0]} style={{ pointerEvents: "none" }}>
          <div className="whitespace-nowrap rounded-full border border-border bg-surface/90 px-3 py-1 font-mono text-xs text-foreground backdrop-blur">
            {config.label.toUpperCase()}
            <span className="ml-2 text-accent">[ {config.description.toUpperCase()} ]</span>
          </div>
        </Html>
      )}
    </group>
  );
}
