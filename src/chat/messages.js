import React from "react";

const Messages = ({ messages }) =>
  <ul className="messages-container">
    {messages.map((message, index) =>
      <li key={index} className="message">
        <div>
          {message}
        </div>
      </li>
    )}
  </ul>;

export default Messages;
