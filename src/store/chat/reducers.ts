import {
  ChatActionTypes,
  ChatState,
  DELETE_MESSAGE,
  SEND_MESSAGE,
  UPDATE_MESSAGE,
} from "./types";

const initialState: ChatState = {
  messageInput: "",
  messages: [
    {
      user: "The Grid",
      message: "Welcome to the chat, enjoy your stay.",
      timestamp: 1593383935739,
    },
  ],
};

export function chatReducer(
  state = initialState,
  action: ChatActionTypes
): ChatState {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        messageInput: "",
        messages: [...state.messages, action.payload],
      };
    case UPDATE_MESSAGE:
      return {
        ...state,
        messageInput: action.data,
      };
    case DELETE_MESSAGE:
      return {
        messageInput: state.messageInput,
        messages: state.messages.filter(
          (message) => message.timestamp !== action.meta.timestamp
        ),
      };
    default:
      return state;
  }
}
