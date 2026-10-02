"use client";

import { useGLTF } from "@react-three/drei";

export function Controller() {
  const { scene } = useGLTF("/models/controller.glb");
  return <primitive object={scene} rotation={[0.1, 0.2, 0]} castShadow />;
}

useGLTF.preload("/models/controller.glb");
