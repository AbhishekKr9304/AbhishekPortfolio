import { RoundedBox } from "@react-three/drei";
import { sceneColors } from "../materials";

export function CameraProp() {
  return (
    <group rotation={[0, 0.5, 0]}>
      <RoundedBox args={[0.26, 0.18, 0.16]} radius={0.015} smoothness={3} castShadow>
        <meshStandardMaterial color={sceneColors.metalDark} roughness={0.4} metalness={0.5} />
      </RoundedBox>
      {/* Grip bump */}
      <mesh position={[-0.11, -0.03, 0.02]}>
        <boxGeometry args={[0.05, 0.12, 0.17]} />
        <meshStandardMaterial color={sceneColors.rubber} roughness={0.8} />
      </mesh>
      {/* Lens barrel */}
      <mesh position={[0, 0, 0.14]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.09, 0.14, 24]} />
        <meshStandardMaterial color={sceneColors.metal} roughness={0.2} metalness={0.8} />
      </mesh>
      <mesh position={[0, 0, 0.19]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.076, 0.076, 0.02, 24]} />
        <meshStandardMaterial color={sceneColors.metalDark} roughness={0.5} metalness={0.4} />
      </mesh>
      <mesh position={[0, 0, 0.22]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.055, 0.055, 0.02, 24]} />
        <meshStandardMaterial
          color={sceneColors.ledBase}
          emissive={sceneColors.accentStrong}
          emissiveIntensity={0.22}
          toneMapped={false}
        />
      </mesh>
      {/* Hot shoe / flash bump */}
      <mesh position={[0, 0.11, -0.02]}>
        <boxGeometry args={[0.06, 0.03, 0.08]} />
        <meshStandardMaterial color={sceneColors.metal} roughness={0.4} metalness={0.5} />
      </mesh>
      {/* Shutter button */}
      <mesh position={[0.1, 0.095, 0.04]}>
        <cylinderGeometry args={[0.012, 0.012, 0.012, 12]} />
        <meshStandardMaterial color={sceneColors.ledBase} emissive={sceneColors.accent} emissiveIntensity={0.25} toneMapped={false} />
      </mesh>
    </group>
  );
}
