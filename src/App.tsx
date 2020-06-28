import React from "react";

import "./App.css";
import ChatHistory from "./features/ChatHistory/ChatHistory";

function App() {
  return (
    <div className="App">
      <header className="App-header">Chat log</header>
      <ChatHistory />
    </div>
  );
}

export default App;
