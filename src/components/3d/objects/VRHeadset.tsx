"use client";

import { useGLTF } from "@react-three/drei";

export function VRHeadset() {
  const { scene } = useGLTF("/models/vr-headset.glb");
  return (
    <primitive
      object={scene}
      position={[0, 0.14, 0]}
      rotation={[0.25, 0.4, 0]}
      castShadow
    />
  );
}

useGLTF.preload("/models/vr-headset.glb");
