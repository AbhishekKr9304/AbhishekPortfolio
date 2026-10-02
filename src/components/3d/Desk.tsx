"use client";

import { useMemo } from "react";
import { sceneColors } from "./materials";
import { buildWoodDeskTexture } from "@/lib/proceduralTextures";

export function Desk() {
  const { map, bumpMap } = useMemo(() => buildWoodDeskTexture(), []);

  return (
    <group>
      <mesh position={[0, 0.78, 0]} receiveShadow castShadow>
        <boxGeometry args={[5.6, 0.06, 2.6]} />
        <meshStandardMaterial
          map={map}
          bumpMap={bumpMap}
          bumpScale={0.4}
          roughness={0.55}
          metalness={0.08}
        />
      </mesh>
      {[-2.6, 2.6].map((x) => (
        <mesh key={x} position={[x, 0.39, -0.9]} castShadow>
          <boxGeometry args={[0.08, 0.78, 0.08]} />
          <meshStandardMaterial color={sceneColors.metal} roughness={0.4} metalness={0.75} />
        </mesh>
      ))}
      {[-2.6, 2.6].map((x) => (
        <mesh key={`${x}-b`} position={[x, 0.39, 0.9]} castShadow>
          <boxGeometry args={[0.08, 0.78, 0.08]} />
          <meshStandardMaterial color={sceneColors.metal} roughness={0.4} metalness={0.75} />
        </mesh>
      ))}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#1c1d21" roughness={0.75} metalness={0.05} />
      </mesh>

      {/* Front-edge RGB strip: cyan to magenta duotone */}
      <mesh position={[-1.4, 0.748, 0.92]}>
        <boxGeometry args={[2.6, 0.006, 0.01]} />
        <meshStandardMaterial
          color={sceneColors.ledBase}
          emissive={sceneColors.accent}
          emissiveIntensity={0.4}
          toneMapped={false}
        />
      </mesh>
      <mesh position={[1.4, 0.748, 0.92]}>
        <boxGeometry args={[2.6, 0.006, 0.01]} />
        <meshStandardMaterial
          color={sceneColors.ledBaseMagenta}
          emissive={sceneColors.magenta}
          emissiveIntensity={0.4}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}
