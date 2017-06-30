import React from 'react';
import './App.css';
import Sidebar from './chat/sidebar';
import ChatContainer from './chat/container';
import { BrowserRouter, Route } from 'react-router-dom';

export default () => (
  <BrowserRouter>
    <div className="App">
      <Route path="/chat/:room" component={Sidebar} />
      <ChatContainer />
    </div>
  </BrowserRouter>
);
