import type { GameSound } from "./store";

// Retro sound effects synthesized on the fly, so no audio files are needed.
// Each note: [frequency in Hz, start offset in s, duration in s]
const patterns: Record<GameSound, { wave: OscillatorType; notes: [number, number, number][] }> = {
  zone: { wave: "square", notes: [[660, 0, 0.08], [990, 0.08, 0.12]] },
  quest: { wave: "square", notes: [[523, 0, 0.08], [659, 0.08, 0.08], [784, 0.16, 0.08], [1047, 0.24, 0.2]] },
  levelup: {
    wave: "triangle",
    notes: [[392, 0, 0.1], [523, 0.1, 0.1], [659, 0.2, 0.1], [784, 0.3, 0.1], [1047, 0.4, 0.35]],
  },
  cheat: {
    wave: "sawtooth",
    notes: [[220, 0, 0.06], [330, 0.06, 0.06], [440, 0.12, 0.06], [660, 0.18, 0.06], [880, 0.24, 0.3]],
  },
};

let context: AudioContext | null = null;

export function playChiptune(sound: GameSound) {
  try {
    context ??= new AudioContext();
    if (context.state === "suspended") void context.resume();
    const { wave, notes } = patterns[sound];
    const now = context.currentTime;
    notes.forEach(([frequency, offset, duration]) => {
      const osc = context!.createOscillator();
      const gain = context!.createGain();
      osc.type = wave;
      osc.frequency.value = frequency;
      gain.gain.setValueAtTime(0.0001, now + offset);
      gain.gain.exponentialRampToValueAtTime(0.06, now + offset + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + offset + duration);
      osc.connect(gain).connect(context!.destination);
      osc.start(now + offset);
      osc.stop(now + offset + duration + 0.02);
    });
  } catch {
    // Audio unavailable: play silently
  }
}
