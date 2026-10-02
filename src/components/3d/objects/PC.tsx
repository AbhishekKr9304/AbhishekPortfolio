import { RoundedBox } from "@react-three/drei";
import { sceneColors } from "../materials";

export function PC() {
  return (
    <group>
      {/* Chassis */}
      <RoundedBox args={[0.5, 1.1, 1]} radius={0.015} smoothness={2} castShadow>
        <meshStandardMaterial color={sceneColors.metalDark} roughness={0.3} metalness={0.6} />
      </RoundedBox>

      {/* Tempered glass side panel */}
      <mesh position={[0.252, 0, 0]}>
        <boxGeometry args={[0.01, 1.0, 0.9]} />
        <meshPhysicalMaterial
          color={sceneColors.screenGlow}
          transparent
          opacity={0.14}
          roughness={0.05}
          metalness={0}
          transmission={0.5}
        />
      </mesh>
      {/* Interior fans visible through glass */}
      {[0.28, -0.1, -0.46].map((z) => (
        <mesh key={z} position={[0.2, 0.25, z]} rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[0.1, 0.012, 8, 24]} />
          <meshStandardMaterial
            color={sceneColors.ledBase}
            emissive={sceneColors.accent}
            emissiveIntensity={0.3}
            toneMapped={false}
          />
        </mesh>
      ))}
      {/* Vertical RGB strip */}
      <mesh position={[0.21, 0, -0.44]}>
        <boxGeometry args={[0.04, 0.95, 0.03]} />
        <meshStandardMaterial
          color={sceneColors.ledBase}
          emissive={sceneColors.accentStrong}
          emissiveIntensity={0.4}
          toneMapped={false}
        />
      </mesh>
      {/* Front I/O panel */}
      <mesh position={[0, 0.42, 0.502]}>
        <boxGeometry args={[0.12, 0.03, 0.005]} />
        <meshStandardMaterial color={sceneColors.metal} roughness={0.4} metalness={0.6} />
      </mesh>
      <mesh position={[-0.02, 0.42, 0.504]}>
        <cylinderGeometry args={[0.012, 0.012, 0.01, 16]} />
        <meshStandardMaterial
          color={sceneColors.ledBase}
          emissive={sceneColors.accent}
          emissiveIntensity={0.35}
          toneMapped={false}
        />
      </mesh>
      {/* Feet */}
      {[
        [-0.2, -0.56, 0.4],
        [0.2, -0.56, 0.4],
        [-0.2, -0.56, -0.4],
        [0.2, -0.56, -0.4],
      ].map((pos) => (
        <mesh key={pos.join(",")} position={pos as [number, number, number]}>
          <cylinderGeometry args={[0.025, 0.025, 0.03, 12]} />
          <meshStandardMaterial color={sceneColors.rubber} roughness={0.9} metalness={0} />
        </mesh>
      ))}
    </group>
  );
}
