import React from 'react';

export default class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      chatrooms: ['Zachs Chat', 'XBox Chat', 'Girls Girls Girls'],
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ chatrooms: ['test'] }), 2000);
  }

  render() {
    let { chatrooms } = this.state;
    return (
      <ul className="sidebar">
        {chatrooms.map((chatroom, index) => (
          <li key={index} className="chatroom">
            <div>
              {chatroom}
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
