import React from "react";
import Input from "./input";
import Messages from "./messages";

export default class Container extends React.Component {
  constructor() {
    super();
    this.state = { messages: [], value: "" };
  }

  render() {
    let { messages, value } = this.state;
    return (
      <div>
        <Messages messages={messages} />
        <Input
          value={value}
          onChange={value => this.setState({ value })}
          onEnter={value =>
            this.setState({ messages: [...messages, value], value: "" })}
        />
      </div>
    );
  }
}
