import { RoundedBox } from "@react-three/drei";
import { sceneColors } from "../materials";

const columns = 15;
const rows = 5;

export function Keyboard() {
  const keyW = 0.05;
  const keyGap = 0.008;
  const startX = -((columns - 1) * (keyW + keyGap)) / 2;
  const startZ = -((rows - 1) * (keyW + keyGap)) / 2;

  return (
    <group>
      <RoundedBox args={[0.92, 0.035, 0.34]} radius={0.015} smoothness={2} position={[0, -0.01, 0]} castShadow>
        <meshStandardMaterial color={sceneColors.metalDark} roughness={0.55} metalness={0.35} />
      </RoundedBox>

      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: columns }).map((_, c) => (
          <mesh
            key={`${r}-${c}`}
            position={[startX + c * (keyW + keyGap), 0.016, startZ + r * (keyW + keyGap)]}
            castShadow
          >
            <boxGeometry args={[keyW * 0.88, 0.014, keyW * 0.88]} />
            <meshStandardMaterial color={sceneColors.keycap} roughness={0.6} metalness={0.1} />
          </mesh>
        )),
      )}

      {/* Spacebar */}
      <mesh position={[0.05, 0.016, startZ + (rows - 1) * (keyW + keyGap) + 0.01]} castShadow>
        <boxGeometry args={[0.3, 0.014, keyW * 0.8]} />
        <meshStandardMaterial color={sceneColors.keycap} roughness={0.6} metalness={0.1} />
      </mesh>

      {/* Underglow strip */}
      <mesh position={[0, -0.025, 0]}>
        <boxGeometry args={[0.88, 0.006, 0.3]} />
        <meshStandardMaterial
          color={sceneColors.ledBase}
          emissive={sceneColors.accent}
          emissiveIntensity={0.3}
          toneMapped={false}
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  );
}
