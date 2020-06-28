import React from "react";

import "./App.css";
import ChatHistory from "./features/ChatHistory/ChatHistory";
import ChatInterface from "./features/ChatInput/ChatInput";

function App() {
  return (
    <div className="App">
      <header className="App-header">Chat log</header>
      <ChatHistory />
      <ChatInterface />
    </div>
  );
}

export default App;
