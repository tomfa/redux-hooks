import { ControllerState } from "./types";
import * as actions from "./actions";
import * as constants from "./constants";
import { createReducer } from "deox";

const initialState: ControllerState = {
  bpm: 128,
  noise: 10,
  bassFuzz: 0,
  bassBeat: 0,
  bassBeatLengthMs: 100,
  pitchFuzz: 0,
  pitchBeat: 0,
  pitchBeatLengthMs: 10,
};

const minClamp = (min: number, value: number): number => {
  return Math.max(value, min);
};
const maxClamp = (value: number, max: number): number => {
  return Math.min(value, max);
};
const clamp = (min: number, value: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

export const controllerReducer = createReducer(initialState, (handle) => [
  handle(actions.setBpm, (state, { payload }) => ({
    ...state,
    bpm: payload.bpm,
  })),
  handle(actions.setNoise, (state, { payload }) => ({
    ...state,
    noise: clamp(
      constants.NOISE_MIN_LEVEL,
      payload.noise,
      constants.NOISE_MAX_LEVEL
    ),
  })),
  handle(actions.setBassFuzz, (state, { payload }) => ({
    ...state,
    bassFuzz: clamp(
      constants.BASS_FUZZ_MIN,
      payload.bassFuzz,
      constants.BASS_FUZZ_MAX
    ),
  })),
  handle(actions.setBassBeat, (state, { payload }) => ({
    ...state,
    bassBeat: clamp(
      constants.BASS_BEAT_MIN,
      payload.bassBeat,
      constants.BASS_BEAT_MAX
    ),
  })),
  handle(actions.setBassBeatLengthMs, (state, { payload }) => ({
    ...state,
    bassBeatLengthMs: clamp(
      constants.BASS_BEAT_LENGTH_MS_MIN,
      payload.bassBeatLengthMs,
      constants.BASS_BEAT_LENGTH_MS_MAX
    ),
  })),
  handle(actions.setPitchFuzz, (state, { payload }) => ({
    ...state,
    pitchFuzz: clamp(
      constants.PITCH_FUZZ_MIN,
      payload.pitchFuzz,
      constants.PITCH_FUZZ_MAX
    ),
  })),
  handle(actions.setPitchBeat, (state, { payload }) => ({
    ...state,
    pitchBeat: clamp(
      constants.PITCH_BEAT_MIN,
      payload.pitchBeat,
      constants.PITCH_BEAT_MAX
    ),
  })),
  handle(actions.setPitchBeatLengthMs, (state, { payload }) => ({
    ...state,
    pitchBeatLengthMs: clamp(
      constants.PITCH_BEAT_LENGTH_MS_MIN,
      payload.pitchBeatLengthMs,
      constants.PITCH_BEAT_LENGTH_MS_MAX
    ),
  })),
]);
