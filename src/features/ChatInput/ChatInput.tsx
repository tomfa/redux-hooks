import React from "react";

import "./ChatInput.css";
import { useChatInput } from "../../store/chat/hooks";
import { useAuth } from "../../store/system/hooks";

const ChatInterface: React.FC = () => {
  const { inputValue, setInputValue, submit } = useChatInput();
  const { userName } = useAuth();

  const onChange = (event: React.SyntheticEvent<{ value: string }>) =>
    setInputValue(event.currentTarget.value);

  const keyPress = (e: React.KeyboardEvent<any>) =>
    e.key === "Enter" && submit();

  const buttonClick = (e: React.MouseEvent<any>) => submit();

  return (
    <div className="chat-interface">
      <h3>User: {userName} </h3>
      <input
        value={inputValue}
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
