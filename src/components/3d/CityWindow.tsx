"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { sceneColors } from "./materials";

function mulberry32(seed: number) {
  return function random() {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildSkylineTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  const rand = mulberry32(1337);

  const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
  sky.addColorStop(0, "#07060d");
  sky.addColorStop(0.55, "#0c0a18");
  sky.addColorStop(1, "#140b1c");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Horizon haze glow
  const haze = ctx.createRadialGradient(
    canvas.width / 2, canvas.height * 0.78, 20,
    canvas.width / 2, canvas.height * 0.78, canvas.width * 0.6,
  );
  haze.addColorStop(0, "rgba(125,211,252,0.18)");
  haze.addColorStop(0.5, "rgba(217,70,239,0.08)");
  haze.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = haze;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Distant building layer (darker, smaller)
  drawBuildingLayer(ctx, canvas, rand, { baseY: 0.62, minH: 0.1, maxH: 0.3, color: "#15121f", step: 34, lit: 0.15 });
  // Near building layer (taller, more lit windows)
  drawBuildingLayer(ctx, canvas, rand, { baseY: 0.8, minH: 0.18, maxH: 0.5, color: "#0b0a12", step: 46, lit: 0.35 });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function drawBuildingLayer(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  rand: () => number,
  opts: { baseY: number; minH: number; maxH: number; color: string; step: number; lit: number },
) {
  const groundY = canvas.height * opts.baseY;
  let x = -20;
  while (x < canvas.width + 20) {
    const w = opts.step * (0.6 + rand() * 0.8);
    const h = canvas.height * (opts.minH + rand() * (opts.maxH - opts.minH));
    const y = groundY - h;
    ctx.fillStyle = opts.color;
    ctx.fillRect(x, y, w, canvas.height - y);

    const cols = Math.max(2, Math.floor(w / 9));
    const rows = Math.max(3, Math.floor(h / 12));
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (rand() > opts.lit) continue;
        const wx = x + 4 + c * (w / cols);
        const wy = y + 6 + r * (h / rows);
        const tint = rand() > 0.5 ? "rgba(125,211,252,0.85)" : "rgba(232,121,249,0.8)";
        ctx.fillStyle = tint;
        ctx.fillRect(wx, wy, 2.5, 3.5);
      }
    }
    x += w + 6;
  }
}

export function CityWindow() {
  const texture = useMemo(() => buildSkylineTexture(), []);

  return (
    <group position={[0, 1.9, -4.8]}>
      {/* Back wall */}
      <mesh position={[0, 0, -0.3]} receiveShadow>
        <planeGeometry args={[9, 5]} />
        <meshStandardMaterial color={sceneColors.surface} roughness={0.95} metalness={0} />
      </mesh>

      {/* Glowing skyline, inset */}
      <mesh position={[0, 0, -0.1]}>
        <planeGeometry args={[5.6, 3]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>

      {/* Window frame */}
      <mesh position={[0, 1.52, 0]}>
        <boxGeometry args={[5.7, 0.08, 0.12]} />
        <meshStandardMaterial color={sceneColors.metalDark} roughness={0.4} metalness={0.6} />
      </mesh>
      <mesh position={[0, -1.52, 0]}>
        <boxGeometry args={[5.7, 0.08, 0.12]} />
        <meshStandardMaterial color={sceneColors.metalDark} roughness={0.4} metalness={0.6} />
      </mesh>
      <mesh position={[-2.85, 0, 0]}>
        <boxGeometry args={[0.08, 3.08, 0.12]} />
        <meshStandardMaterial color={sceneColors.metalDark} roughness={0.4} metalness={0.6} />
      </mesh>
      <mesh position={[2.85, 0, 0]}>
        <boxGeometry args={[0.08, 3.08, 0.12]} />
        <meshStandardMaterial color={sceneColors.metalDark} roughness={0.4} metalness={0.6} />
      </mesh>
      {/* Mullions */}
      {[-1.4, 0, 1.4].map((x) => (
        <mesh key={x} position={[x, 0, 0]}>
          <boxGeometry args={[0.04, 3, 0.08]} />
          <meshStandardMaterial color={sceneColors.metalDark} roughness={0.4} metalness={0.6} />
        </mesh>
      ))}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[5.6, 0.04, 0.08]} />
        <meshStandardMaterial color={sceneColors.metalDark} roughness={0.4} metalness={0.6} />
      </mesh>
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[5.6, 0.04, 0.08]} />
        <meshStandardMaterial color={sceneColors.metalDark} roughness={0.4} metalness={0.6} />
      </mesh>
    </group>
  );
}
