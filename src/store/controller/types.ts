// Describing the shape of the chat's slice of state
export interface Message {
  user: string;
  message: string;
  timestamp: number;
}

export interface ControllerState {
  bpm: number;
  noise: number;
  bassFuzz: number;
  bassBeat: number;
  bassBeatLengthMs: number;
  pitchFuzz: number; //
  pitchBeat: number; // 2 octaves
  pitchBeatLengthMs: number;
}

// Describing the different ACTION NAMES available
export const SEND_MESSAGE = "SEND_MESSAGE";
export const UPDATE_MESSAGE = "UPDATE_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

interface SendMessageAction {
  type: typeof SEND_MESSAGE;
  payload: Message;
}

interface DeleteMessageAction {
  type: typeof DELETE_MESSAGE;
  meta: {
    timestamp: number;
  };
}

interface UpdateMessageAction {
  type: typeof UPDATE_MESSAGE;
  data: string;
}

export type ChatActionTypes =
  | SendMessageAction
  | UpdateMessageAction
  | DeleteMessageAction;
