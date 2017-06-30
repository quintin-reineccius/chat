import React from "react";

const Sidebar = ({ chatrooms }) =>
  <ul className="sidebar">
    {chatrooms.map((chatroom, index) =>
      <li key={index} className="chatroom">
        <div>
          {chatroom}
        </div>
      </li>
    )}
  </ul>;

export default Sidebar;
