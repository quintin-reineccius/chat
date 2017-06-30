import React from 'react';
import './App.css';
import Sidebar from './chat/sidebar';
import ChatContainer from './chat/container';

export default () => (
  <div className="App">
    <Sidebar />
    <ChatContainer />
  </div>
);
