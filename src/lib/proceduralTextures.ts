import * as THREE from "three";

function mulberry32(seed: number) {
  return function random() {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function buildWoodDeskTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  if (!ctx) return { map: new THREE.CanvasTexture(canvas), bumpMap: new THREE.CanvasTexture(canvas) };

  const rand = mulberry32(42);
  const base = "#4a3524";
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Horizontal grain streaks with slight waviness
  for (let y = 0; y < canvas.height; y += 2) {
    const shade = 55 + rand() * 30;
    const wave = Math.sin(y * 0.05 + rand() * 2) * 3;
    ctx.strokeStyle = `rgba(${shade + 30},${shade + 18},${shade + 6},${0.25 + rand() * 0.2})`;
    ctx.lineWidth = 1 + rand();
    ctx.beginPath();
    ctx.moveTo(0, y + wave);
    ctx.bezierCurveTo(
      canvas.width * 0.3, y + wave + (rand() - 0.5) * 6,
      canvas.width * 0.7, y + wave + (rand() - 0.5) * 6,
      canvas.width, y + wave,
    );
    ctx.stroke();
  }

  // Subtle knots
  for (let i = 0; i < 4; i++) {
    const kx = rand() * canvas.width;
    const ky = rand() * canvas.height;
    const grad = ctx.createRadialGradient(kx, ky, 2, kx, ky, 18 + rand() * 10);
    grad.addColorStop(0, "rgba(28,20,13,0.5)");
    grad.addColorStop(1, "rgba(28,20,13,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(kx - 30, ky - 30, 60, 60);
  }

  const map = new THREE.CanvasTexture(canvas);
  map.colorSpace = THREE.SRGBColorSpace;
  map.wrapS = map.wrapT = THREE.RepeatWrapping;

  // Bump/roughness variation from a desaturated, higher-contrast pass
  const bumpCanvas = document.createElement("canvas");
  bumpCanvas.width = canvas.width;
  bumpCanvas.height = canvas.height;
  const bctx = bumpCanvas.getContext("2d");
  if (bctx) {
    bctx.filter = "grayscale(1) contrast(1.6)";
    bctx.drawImage(canvas, 0, 0);
  }
  const bumpMap = new THREE.CanvasTexture(bumpCanvas);
  bumpMap.wrapS = bumpMap.wrapT = THREE.RepeatWrapping;

  return { map, bumpMap };
}
