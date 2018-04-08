import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from '../components/nav/Navbar';
import SongListTheme from '../components/SongListTheme';

import LoginView from '../views/LoginView';
import LogoutView from '../views/LogoutView';
import SignupView from '../views/SignupView';
import MySongs from '../containers/MySongs';
import YoutubeSongs from '../containers/YoutubeSongs';
import MyPlaylists from '../containers/MyPlaylists';
import AddPlaylist from '../containers/AddPlaylist';
import { UserType } from '../types';
import requireAuth from '../hoc/requireAuth';
import defaultRoute from '../hoc/defaultRoute';

const SongListApp = props => (
  <SongListTheme>
    <BrowserRouter>
      <div>
        <Navbar {...props} />
        <div className="container">
          <Switch>
            <Route component={LoginView} path="/login" />
            <Route component={LogoutView} path="/logout" />
            <Route component={SignupView} path="/signup" />
            <Route path="/youtube" component={requireAuth(YoutubeSongs)} />
            <Route path="/mysongs" component={requireAuth(MySongs)} />
            <Route path="/playlists" component={requireAuth(MyPlaylists)} />
            <Route path="/addplaylist" component={requireAuth(AddPlaylist)} />
            <Route component={defaultRoute(MySongs)} path="*" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </SongListTheme>
);

SongListApp.propTypes = {
  user: UserType,
};

SongListApp.defaultProps = {
  user: null,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(SongListApp);
