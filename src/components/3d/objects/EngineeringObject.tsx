"use client";

import { useRef } from "react";
import type { Group } from "three";
import { useFrame } from "@react-three/fiber";
import { sceneColors } from "../materials";

export function EngineeringObject() {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.4;
    groupRef.current.rotation.x += delta * 0.1;
  });

  return (
    <group position={[0, 0.16, 0]} ref={groupRef}>
      {/* Central gear-like core */}
      <mesh castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.05, 16]} />
        <meshStandardMaterial color={sceneColors.metal} roughness={0.25} metalness={0.8} />
      </mesh>
      {/* Gear teeth */}
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 0.12, 0, Math.sin(angle) * 0.12]}
            rotation={[0, -angle, 0]}
          >
            <boxGeometry args={[0.03, 0.05, 0.02]} />
            <meshStandardMaterial color={sceneColors.metalLight} roughness={0.3} metalness={0.7} />
          </mesh>
        );
      })}
      {/* Orbiting bolt */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.18, 0.006, 8, 32]} />
        <meshStandardMaterial
          color={sceneColors.ledBase}
          emissive={sceneColors.accent}
          emissiveIntensity={0.25}
          toneMapped={false}
        />
      </mesh>
      {/* Center hex bolt */}
      <mesh position={[0, 0.03, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.02, 6]} />
        <meshStandardMaterial color={sceneColors.ledBase} emissive={sceneColors.accentStrong} emissiveIntensity={0.35} toneMapped={false} />
      </mesh>
    </group>
  );
}
