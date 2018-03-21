import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SongListApp from './components/SongListApp';
import LoginView from './views/LoginView';
import LoginRoute from './routes/LoginRoute';

const Root = props => (
  <BrowserRouter>
    <div>
      <Route component={LoginView} path="/login" />
      <LoginRoute component={SongListApp} path="/" />
    </div>
  </BrowserRouter>
);

export default Root;
