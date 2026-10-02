import { RoundedBox } from "@react-three/drei";
import { sceneColors } from "../materials";

export function Tablet() {
  return (
    <group rotation={[-Math.PI / 2.6, 0, 0]}>
      <RoundedBox args={[0.32, 0.44, 0.015]} radius={0.02} smoothness={3} castShadow>
        <meshStandardMaterial color={sceneColors.metalDark} roughness={0.3} metalness={0.5} />
      </RoundedBox>
      <mesh position={[0, 0, 0.009]}>
        <planeGeometry args={[0.28, 0.4]} />
        <meshStandardMaterial
          color={sceneColors.ledBase}
          emissive={sceneColors.accent}
          emissiveIntensity={0.3}
          toneMapped={false}
        />
      </mesh>
      {/* Simulated AR overlay reticle */}
      <mesh position={[0.05, 0.08, 0.01]}>
        <ringGeometry args={[0.025, 0.03, 20]} />
        <meshStandardMaterial
          color={sceneColors.ledBase}
          emissive={sceneColors.accentStrong}
          emissiveIntensity={0.4}
          toneMapped={false}
        />
      </mesh>
      {/* Rear camera bump */}
      <mesh position={[-0.1, 0.16, -0.012]}>
        <circleGeometry args={[0.018, 16]} />
        <meshStandardMaterial color={sceneColors.rubber} roughness={0.4} metalness={0.5} />
      </mesh>

      {/* Stylus resting beside it */}
      <mesh position={[0.2, -0.1, 0.01]} rotation={[0, 0, Math.PI / 2.3]}>
        <cylinderGeometry args={[0.009, 0.009, 0.26, 16]} />
        <meshStandardMaterial color={sceneColors.metalLight} roughness={0.3} metalness={0.6} />
      </mesh>
    </group>
  );
}
