import React, { useCallback } from "react";
import { RootState } from "../../store";
import { connect, useDispatch, useSelector } from "react-redux";

import { sendMessage, updateMessage } from "../../store/chat/actions";
import "./ChatInput.css";

const ChatInterface: React.FC = () => {
  const message = useSelector((state: RootState) => state.chat.messageInput);
  const user = useSelector((state: RootState) => state.system.userName);
  const dispatch = useDispatch();
  const send = useCallback(
    ({ message, user }) =>
      message &&
      dispatch(
        sendMessage({
          message,
          user,
          timestamp: new Date().getTime(),
        })
      ),
    [dispatch]
  );

  const onChange = useCallback(
    (event: React.SyntheticEvent<{ value: string }>) => {
      dispatch(updateMessage(event.currentTarget.value));
    },
    [dispatch]
  );

  function keyPress(e: React.KeyboardEvent<any>) {
    if (e.key === "Enter") {
      send({ message, user });
    }
  }

  function buttonClick(e: React.MouseEvent<any>) {
    send({ message, user });
  }

  return (
    <div className="chat-interface">
      <h3>User: {user} </h3>
      <input
        value={message}
        onChange={onChange}
        onKeyPress={keyPress}
        className="chat-input"
        placeholder="Type a message..."
      />
      <button onClick={buttonClick}>Send</button>
    </div>
  );
};

export default ChatInterface;
