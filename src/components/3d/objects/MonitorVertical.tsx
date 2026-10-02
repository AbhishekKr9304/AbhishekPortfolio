"use client";

import { RoundedBox } from "@react-three/drei";
import { sceneColors } from "../materials";
import { ScreenContent } from "../ScreenContent";

export function MonitorVertical() {
  return (
    <group>
      <mesh position={[0, -0.62, 0.14]} receiveShadow castShadow>
        <cylinderGeometry args={[0.16, 0.18, 0.02, 32]} />
        <meshStandardMaterial color={sceneColors.metalDark} roughness={0.35} metalness={0.7} />
      </mesh>
      <mesh position={[0, -0.34, 0.08]} castShadow>
        <boxGeometry args={[0.05, 0.56, 0.04]} />
        <meshStandardMaterial color={sceneColors.metal} roughness={0.3} metalness={0.8} />
      </mesh>

      <RoundedBox args={[0.62, 1.0, 0.045]} radius={0.018} smoothness={3} position={[0, 0.15, 0]} castShadow>
        <meshStandardMaterial color={sceneColors.bezel} roughness={0.35} metalness={0.5} />
      </RoundedBox>
      <mesh position={[0, 0.15, 0.025]}>
        <planeGeometry args={[0.54, 0.88]} />
        <meshStandardMaterial
          color={sceneColors.screenGlowDim}
          emissive={sceneColors.screenGlowDim}
          emissiveIntensity={0.3}
          toneMapped={false}
        />
      </mesh>
      <ScreenContent
        objectId="monitor-vertical"
        position={[0, 0.15, 0.028]}
        widthPx={230}
        heightPx={375}
        worldWidth={0.54}
      />
    </group>
  );
}
