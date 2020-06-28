import {
  ChatActionTypes,
  Message,
  DELETE_MESSAGE,
  UPDATE_MESSAGE,
  SEND_MESSAGE,
} from "./types";

export function updateMessage(inoutValue: string): ChatActionTypes {
  return {
    type: UPDATE_MESSAGE,
    data: inoutValue,
  };
}

export function sendMessage(newMessage: Message): ChatActionTypes {
  return {
    type: SEND_MESSAGE,
    payload: newMessage,
  };
}

export function deleteMessage(timestamp: number): ChatActionTypes {
  return {
    type: DELETE_MESSAGE,
    meta: {
      timestamp,
    },
  };
}
