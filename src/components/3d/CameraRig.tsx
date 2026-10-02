"use client";

import { useEffect, useRef } from "react";
import { CameraControls } from "@react-three/drei";
import { useWorkspace } from "@/components/workspace/WorkspaceContext";
import { workstationObjects, defaultCameraView } from "@/data/workstationObjects";

export function CameraRig() {
  const controlsRef = useRef<CameraControls | null>(null);
  const { focusedObjectId } = useWorkspace();

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    const target = focusedObjectId
      ? workstationObjects.find((obj) => obj.id === focusedObjectId)
      : null;

    if (target) {
      controls.setLookAt(
        ...target.focusPosition,
        ...target.focusTarget,
        true,
      );
    } else {
      controls.setLookAt(
        ...defaultCameraView.position,
        ...defaultCameraView.target,
        true,
      );
    }
  }, [focusedObjectId]);

  return (
    <CameraControls
      ref={controlsRef}
      minDistance={2}
      maxDistance={9}
      minPolarAngle={Math.PI / 6}
      maxPolarAngle={Math.PI / 2.1}
      dollySpeed={0}
      truckSpeed={0}
      smoothTime={0.6}
    />
  );
}
