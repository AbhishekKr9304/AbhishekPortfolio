"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { WorkstationScene } from "./WorkstationScene";
import { defaultCameraView } from "@/data/workstationObjects";
import { sceneColors } from "./materials";

export function SceneCanvas() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.75]}
      camera={{ position: defaultCameraView.position, fov: 38 }}
      gl={{
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.5,
        antialias: true,
      }}
      className="!fixed !inset-0"
    >
      <color attach="background" args={[sceneColors.background]} />
      <fog attach="fog" args={[sceneColors.background, 7, 15]} />
      <Suspense fallback={null}>
        <WorkstationScene />
      </Suspense>
    </Canvas>
  );
}
