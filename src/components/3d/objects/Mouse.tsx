"use client";

import { useGLTF } from "@react-three/drei";

export function Mouse() {
  const { scene } = useGLTF("/models/mouse.glb");
  return <primitive object={scene} castShadow />;
}

useGLTF.preload("/models/mouse.glb");
