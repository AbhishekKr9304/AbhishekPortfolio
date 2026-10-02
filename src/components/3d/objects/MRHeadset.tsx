"use client";

import { useGLTF } from "@react-three/drei";

export function MRHeadset() {
  const { scene } = useGLTF("/models/mr-headset.glb");
  return (
    <primitive
      object={scene}
      position={[0, 0.12, 0]}
      rotation={[0.2, -0.35, 0]}
      castShadow
    />
  );
}

useGLTF.preload("/models/mr-headset.glb");
