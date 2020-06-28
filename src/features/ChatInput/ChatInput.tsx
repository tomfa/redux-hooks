import React from "react";
import { RootState } from "../../store";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { sendMessage, updateMessage } from "../../store/chat/actions";
import "./ChatInput.css";

interface OwnProps {}
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type StateProps = ReturnType<typeof mapStateToProps>;
type Props = DispatchProps & StateProps & OwnProps;

const ChatInterface: React.FC<Props> = ({
  user,
  message,
  updateMessage,
  send,
}) => {
  const onChange = (event: React.SyntheticEvent<{ value: string }>) => {
    updateMessage(event.currentTarget.value);
  };

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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  send: ({ message, user }: { message: string; user: string }) =>
    message &&
    dispatch(
      sendMessage({
        message,
        user,
        timestamp: new Date().getTime(),
      })
    ),
  updateMessage: (message: string) => dispatch(updateMessage(message)),
});

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  user: state.system.userName,
  message: state.chat.messageInput,
});

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(ChatInterface);
