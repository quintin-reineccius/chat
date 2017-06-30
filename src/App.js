import React, { Component } from "react";
import "./App.css";
import Sidebar from "./chat/sidebar";
import ChatContainer from "./chat/container";

class App extends Component {
  constructor() {
    super();
    this.state = {
      chatrooms: ["Zachs Chat", "XBox Chat", "Girls Girls Girls"],
    };
  }

  render() {
    let { chatrooms } = this.state;
    return (
      <div className="App">
        <Sidebar chatrooms={chatrooms} />
        <ChatContainer />
      </div>
    );
  }
}

export default App;
