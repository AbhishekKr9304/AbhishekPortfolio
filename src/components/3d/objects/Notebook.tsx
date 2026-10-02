import { sceneColors } from "../materials";

export function Notebook() {
  return (
    <group rotation={[-Math.PI / 2, 0, 0.1]}>
      <mesh castShadow>
        <boxGeometry args={[0.26, 0.36, 0.022]} />
        <meshStandardMaterial color={sceneColors.surface} roughness={0.8} metalness={0.1} />
      </mesh>
      {/* Pages edge */}
      <mesh position={[0.005, 0, 0.012]}>
        <boxGeometry args={[0.25, 0.355, 0.004]} />
        <meshStandardMaterial color="#e8e4da" roughness={0.9} metalness={0} />
      </mesh>
      {/* Spiral binding */}
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh
          key={i}
          position={[-0.125, -0.16 + i * 0.036, 0.016]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <torusGeometry args={[0.012, 0.0035, 6, 12]} />
          <meshStandardMaterial color={sceneColors.metalLight} roughness={0.4} metalness={0.6} />
        </mesh>
      ))}
      {/* Pen resting on top */}
      <mesh position={[0.02, 0.1, 0.018]} rotation={[0, 0, 0.15]}>
        <cylinderGeometry args={[0.006, 0.006, 0.28, 12]} />
        <meshStandardMaterial color={sceneColors.accent} roughness={0.4} metalness={0.3} />
      </mesh>
    </group>
  );
}
