import { Environment, ContactShadows, SoftShadows } from "@react-three/drei";
import { Desk } from "./Desk";
import { SceneLighting } from "./SceneLighting";
import { InteractiveObject } from "./InteractiveObject";
import { CameraRig } from "./CameraRig";
import { CityWindow } from "./CityWindow";
import { Chair } from "./objects/Chair";
import { Cables } from "./Cables";
import { PostProcessing } from "./PostProcessing";
import { workstationObjects } from "@/data/workstationObjects";
import { Monitor } from "./objects/Monitor";
import { MonitorVertical } from "./objects/MonitorVertical";
import { PC } from "./objects/PC";
import { Keyboard } from "./objects/Keyboard";
import { Mouse } from "./objects/Mouse";
import { VRHeadset } from "./objects/VRHeadset";
import { MRHeadset } from "./objects/MRHeadset";
import { Tablet } from "./objects/Tablet";
import { CameraProp } from "./objects/CameraProp";
import { Controller } from "./objects/Controller";
import { Notebook } from "./objects/Notebook";
import { EngineeringObject } from "./objects/EngineeringObject";

const geometryById: Record<string, React.ComponentType> = {
  monitor: Monitor,
  "monitor-vertical": MonitorVertical,
  "gaming-pc": PC,
  keyboard: Keyboard,
  mouse: Mouse,
  "vr-headset": VRHeadset,
  "mr-headset": MRHeadset,
  tablet: Tablet,
  camera: CameraProp,
  controller: Controller,
  notebook: Notebook,
  "engineering-object": EngineeringObject,
};

export function WorkstationScene() {
  return (
    <>
      <SoftShadows size={18} samples={12} focus={0.6} />
      <SceneLighting />
      <Environment preset="apartment" background={false} environmentIntensity={0.35} />
      <Desk />
      <CityWindow />
      <Chair />
      <Cables />
      <ContactShadows
        position={[0, 0.001, 0.2]}
        opacity={0.55}
        scale={10}
        blur={2.2}
        far={1.4}
        resolution={1024}
        color="#000000"
      />
      {workstationObjects.map((config) => {
        const Geometry = geometryById[config.id];
        if (!Geometry) return null;
        return (
          <InteractiveObject key={config.id} config={config}>
            <Geometry />
          </InteractiveObject>
        );
      })}
      <CameraRig />
      <PostProcessing />
    </>
  );
}
