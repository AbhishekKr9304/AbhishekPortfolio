"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { WorkspaceProvider } from "./WorkspaceContext";
import { EntryScreen } from "@/components/entry/EntryScreen";
import { OSShell } from "@/components/os/OSShell";

const SceneCanvas = dynamic(
  () => import("@/components/3d/SceneCanvas").then((mod) => mod.SceneCanvas),
  { ssr: false },
);

export function WorkstationExperience() {
  const [entered, setEntered] = useState(false);

  return (
    <WorkspaceProvider>
      {entered ? (
        <>
          <SceneCanvas />
          <OSShell />
        </>
      ) : (
        <EntryScreen onEnter={() => setEntered(true)} />
      )}
    </WorkspaceProvider>
  );
}
