import * as React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store";
import "./ChatHistory.css";

const ChatHistory: React.FC = () => {
  const messages = useSelector((state: RootState) => state.chat.messages);
  return (
    <div className="chat-history">
      {messages.map((message) => (
        <div className="message-item" key={message.timestamp}>
          <h3>From: {message.user}</h3>
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
