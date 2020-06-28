import * as React from "react";
import { connect } from "react-redux";

import { RootState } from "../../store";
import "./ChatHistory.css";

interface OwnProps {}
type DispatchProps = {};
type StateProps = ReturnType<typeof mapStateToProps>;
type Props = OwnProps & DispatchProps & StateProps;

const ChatHistory: React.FC<Props> = ({ messages }) => (
  <div className="chat-history">
    {messages.map((message) => (
      <div className="message-item" key={message.timestamp}>
        <h3>From: {message.user}</h3>
        <p>{message.message}</p>
      </div>
    ))}
  </div>
);

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  messages: state.chat.messages,
});

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  mapStateToProps
)(ChatHistory);
