import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import SongListApp from './components/SongListApp';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import LoginRoute from './routes/LoginRoute';
import SongListTheme from './components/SongListTheme';

const Root = props => (
  <SongListTheme>
    <BrowserRouter>
      <div>
        <Route component={LoginView} path="/login" />
        <Route component={RegisterView} path="/register" />
        <LoginRoute component={SongListApp} path="/" />
      </div>
    </BrowserRouter>
  </SongListTheme>
);

export default Root;
