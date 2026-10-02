"use client";

import { RoundedBox } from "@react-three/drei";
import { sceneColors } from "../materials";
import { ScreenContent } from "../ScreenContent";

export function Monitor() {
  return (
    <group>
      {/* Stand base */}
      <mesh position={[0, -0.78, 0.18]} receiveShadow castShadow>
        <cylinderGeometry args={[0.22, 0.24, 0.025, 32]} />
        <meshStandardMaterial color={sceneColors.metalDark} roughness={0.35} metalness={0.7} />
      </mesh>
      {/* Stand neck */}
      <mesh position={[0, -0.42, 0.1]} castShadow>
        <boxGeometry args={[0.07, 0.72, 0.05]} />
        <meshStandardMaterial color={sceneColors.metal} roughness={0.3} metalness={0.8} />
      </mesh>
      {/* VESA arm */}
      <mesh position={[0, -0.08, 0.02]} castShadow>
        <boxGeometry args={[0.16, 0.08, 0.1]} />
        <meshStandardMaterial color={sceneColors.metalDark} roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Chassis + bezel */}
      <RoundedBox args={[1.92, 0.76, 0.05]} radius={0.02} smoothness={3} position={[0, 0.3, 0]} castShadow>
        <meshStandardMaterial color={sceneColors.bezel} roughness={0.35} metalness={0.5} />
      </RoundedBox>
      {/* Screen backlight bleed behind the real DOM screen content */}
      <mesh position={[0, 0.3, 0.025]}>
        <planeGeometry args={[1.8, 0.64]} />
        <meshStandardMaterial
          color={sceneColors.screenGlowDim}
          emissive={sceneColors.screenGlowDim}
          emissiveIntensity={0.3}
          toneMapped={false}
        />
      </mesh>
      <ScreenContent
        objectId="monitor"
        position={[0, 0.3, 0.03]}
        widthPx={760}
        heightPx={270}
        worldWidth={1.8}
      />

      {/* Bottom chin accent light */}
      <mesh position={[0, -0.08, 0.026]}>
        <planeGeometry args={[0.3, 0.012]} />
        <meshStandardMaterial
          color={sceneColors.ledBase}
          emissive={sceneColors.accent}
          emissiveIntensity={0.35}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}
