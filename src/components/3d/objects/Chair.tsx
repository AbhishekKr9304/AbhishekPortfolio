"use client";

import { useGLTF } from "@react-three/drei";

export function Chair() {
  const { scene } = useGLTF("/models/chair.glb");
  return <primitive object={scene} position={[0, 0, 1.9]} rotation={[0, Math.PI, 0]} castShadow receiveShadow />;
}

useGLTF.preload("/models/chair.glb");
