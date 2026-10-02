import { sceneColors } from "./materials";

export function SceneLighting() {
  return (
    <>
      <ambientLight intensity={6} color="#8fb4c9" />
      <hemisphereLight args={["#4a5868", "#12131c", 5]} />
      <directionalLight
        position={[3, 5, 2]}
        intensity={12}
        color="#dce8f0"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      {/* Soft overhead desk fill, keeps props legible without flattening mood lighting */}
      <pointLight position={[0, 2.3, 0.6]} intensity={9} color="#cfe3ee" distance={7} />
      <pointLight position={[-1.6, 1.4, 0.7]} intensity={5.5} color="#cfe3ee" distance={3.8} />
      <pointLight position={[1.1, 1.3, 1.3]} intensity={5} color="#cfe3ee" distance={3.6} />
      {/* Camera-side fill so hover/focus props read clearly, not just silhouettes */}
      <pointLight position={[3, 2, 4.5]} intensity={5} color="#cfe3ee" distance={9} />

      <pointLight position={[-0.5, 1.6, -0.9]} intensity={0.6} color={sceneColors.screenGlow} distance={3.5} />
      <pointLight position={[1.55, 1.55, -0.85]} intensity={0.5} color={sceneColors.accentStrong} distance={2.6} />
      <pointLight position={[2.3, 0.6, -0.6]} intensity={0.35} color={sceneColors.accent} distance={2.2} />
      <pointLight position={[-1.9, 0.5, 0.8]} intensity={0.25} color={sceneColors.accentStrong} distance={1.8} />
      {/* Magenta rim light from the city window, balancing the cyan accents */}
      <pointLight position={[0, 1.8, -4.2]} intensity={0.8} color={sceneColors.magenta} distance={7} />
      <pointLight position={[-2.6, 0.6, 1.6]} intensity={0.2} color={sceneColors.magenta} distance={2.2} />
      <pointLight position={[2.6, 0.6, 1.6]} intensity={0.18} color={sceneColors.accent} distance={2.2} />
    </>
  );
}
