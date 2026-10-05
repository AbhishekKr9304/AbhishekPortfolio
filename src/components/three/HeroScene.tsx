"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { MathUtils, type Group } from "three";

const ACCENT = "#7dd3fc";
const ACCENT_STRONG = "#38bdf8";

function Core() {
  const group = useRef<Group>(null);
  const rings = useRef<Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  // The canvas sits behind the hero content, so track the pointer on the window.
  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useFrame((_, delta) => {
    const g = group.current;
    if (g) {
      g.rotation.y += delta * 0.18;
      g.rotation.x = MathUtils.damp(g.rotation.x, pointer.current.y * 0.45, 3, delta);
      g.position.x = MathUtils.damp(g.position.x, pointer.current.x * 0.35, 3, delta);
      // Spin up a little as the visitor scrolls away from the hero
      g.rotation.z = MathUtils.damp(g.rotation.z, window.scrollY * 0.0015, 4, delta);
    }
    if (rings.current) {
      rings.current.rotation.x += delta * 0.25;
      rings.current.rotation.y -= delta * 0.12;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.1}>
      <group ref={group} scale={1.25}>
        <mesh>
          <icosahedronGeometry args={[1.6, 1]} />
          <meshBasicMaterial color={ACCENT} wireframe transparent opacity={0.28} />
        </mesh>
        <mesh scale={0.82}>
          <icosahedronGeometry args={[1.6, 0]} />
          <meshStandardMaterial
            color="#0b1d2a"
            emissive={ACCENT_STRONG}
            emissiveIntensity={0.18}
            metalness={0.7}
            roughness={0.25}
            flatShading
          />
        </mesh>
        <group ref={rings}>
          <mesh rotation={[Math.PI / 2.4, 0, 0]}>
            <torusGeometry args={[2.5, 0.012, 8, 160]} />
            <meshBasicMaterial color={ACCENT} transparent opacity={0.5} />
          </mesh>
          <mesh rotation={[0, Math.PI / 3, Math.PI / 5]}>
            <torusGeometry args={[2.85, 0.008, 8, 160]} />
            <meshBasicMaterial color={ACCENT} transparent opacity={0.3} />
          </mesh>
        </group>
      </group>
    </Float>
  );
}

export default function HeroScene({ active, reduceMotion }: { active: boolean; reduceMotion: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 7], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      // Stop rendering when the hero is off-screen; render a single still frame for reduced motion
      frameloop={reduceMotion ? "demand" : active ? "always" : "never"}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 5, 6]} intensity={1.4} />
      <pointLight position={[-4, -2, 3]} intensity={25} color={ACCENT_STRONG} />
      <Core />
      <Sparkles count={70} scale={[12, 7, 6]} size={2.2} speed={0.3} opacity={0.6} color={ACCENT} />
    </Canvas>
  );
}
