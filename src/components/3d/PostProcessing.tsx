import { EffectComposer, Bloom, SSAO, Vignette, DepthOfField, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export function PostProcessing() {
  return (
    <EffectComposer multisampling={4} enableNormalPass>
      <SSAO
        samples={16}
        radius={0.2}
        intensity={8}
        luminanceInfluence={0.4}
        bias={0.02}
        worldDistanceThreshold={1.5}
        worldDistanceFalloff={0.5}
        worldProximityThreshold={1}
        worldProximityFalloff={0.5}
      />
      <Bloom
        intensity={0.2}
        luminanceThreshold={0.88}
        luminanceSmoothing={0.2}
        mipmapBlur
        radius={0.25}
      />
      <DepthOfField focusDistance={0.012} focalLength={0.018} bokehScale={2.2} height={480} />
      <Noise opacity={0.012} blendFunction={BlendFunction.OVERLAY} />
      <Vignette eskil={false} offset={0.2} darkness={0.4} />
    </EffectComposer>
  );
}
