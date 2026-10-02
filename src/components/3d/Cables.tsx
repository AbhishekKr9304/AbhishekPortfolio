"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { sceneColors } from "./materials";

function CableTube({ points, radius = 0.012 }: { points: [number, number, number][]; radius?: number }) {
  const geometry = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)));
    return new THREE.TubeGeometry(curve, 24, radius, 8, false);
  }, [points, radius]);

  return (
    <mesh geometry={geometry} castShadow receiveShadow>
      <meshStandardMaterial color={sceneColors.rubber} roughness={0.85} metalness={0.05} />
    </mesh>
  );
}

export function Cables() {
  return (
    <group>
      {/* Monitor power cable: stand base down to the floor behind the desk */}
      <CableTube
        points={[
          [-0.5, 0.78, -0.95],
          [-0.65, 0.5, -1.0],
          [-0.8, 0.1, -1.05],
          [-0.9, 0.01, -1.1],
        ]}
      />
      {/* Second monitor power cable */}
      <CableTube
        points={[
          [1.55, 0.78, -0.92],
          [1.65, 0.48, -0.98],
          [1.75, 0.1, -1.05],
          [1.85, 0.01, -1.1],
        ]}
      />
      {/* PC tower cable bundle to the floor */}
      <CableTube
        points={[
          [2.3, 0.6, -0.9],
          [2.4, 0.35, -0.95],
          [2.45, 0.1, -1.0],
          [2.5, 0.01, -1.05],
        ]}
        radius={0.016}
      />
      {/* Keyboard cable running back across the desk */}
      <CableTube
        points={[
          [-0.25, 0.81, 1.35],
          [0.1, 0.8, 1.1],
          [0.5, 0.79, 0.3],
          [0.9, 0.785, -0.6],
        ]}
        radius={0.007}
      />
    </group>
  );
}
