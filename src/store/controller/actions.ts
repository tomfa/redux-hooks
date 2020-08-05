import { createAction } from "deox";

export const setBpm = createAction("SET_BPM", (handler) => (bpm: number) =>
  handler({ bpm })
);
export const setNoise = createAction(
  "SET_NOISE",
  (handler) => (noise: number) => handler({ noise })
);
export const setBassFuzz = createAction(
  "SET_BASS_FUZZ",
  (handler) => (bassFuzz: number) => handler({ bassFuzz })
);
export const setBassBeat = createAction(
  "SET_BASS_BEAT",
  (handler) => (bassBeat: number) => handler({ bassBeat })
);
export const setBassBeatLengthMs = createAction(
  "SET_BASS_BEAT_LENGTH_MS",
  (handler) => (bassBeatLengthMs: number) => handler({ bassBeatLengthMs })
);
export const setPitchFuzz = createAction(
  "SET_PITCH_FUZZ",
  (handler) => (pitchFuzz: number) => handler({ pitchFuzz })
);
export const setPitchBeat = createAction(
  "SET_PITCH_BEAT",
  (handler) => (pitchBeat: number) => handler({ pitchBeat })
);
export const setPitchBeatLengthMs = createAction(
  "SET_PITCH_BEAT_LENGTH_MS",
  (handler) => (pitchBeatLengthMs: number) => handler({ pitchBeatLengthMs })
);
