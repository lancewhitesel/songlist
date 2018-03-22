import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './nav/Navbar';
import SongListTheme from './SongListTheme';

import LoginView from '../views/LoginView';
import LogoutView from '../views/LogoutView';
import RegisterView from '../views/RegisterView';
import MyPlaylists from '../containers/MyPlaylists';
import MySongs from '../containers/MySongs';
import YoutubeSongs from '../containers/YoutubeSongs';
import LoginRoute from '../routes/LoginRoute';

const SongListApp = props => (
  <SongListTheme>
    <BrowserRouter>
      <div>
        <Navbar {...props} />
        <div className="container">
          <Route component={LoginView} path="/login" />
          <Route component={LogoutView} path="/logout" />
          <Route component={RegisterView} path="/register" />
          <Route path="/youtube" component={YoutubeSongs} />
          <Route path="/playlists" component={MyPlaylists} />
          <Route path="/mysongs" component={MySongs} />
          <LoginRoute exact path="/" />
        </div>
      </div>
    </BrowserRouter>
  </SongListTheme>
);

export default SongListApp;
