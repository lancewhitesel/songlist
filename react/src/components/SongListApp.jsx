import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navbar from './nav/Navbar';
import SongListTheme from './SongListTheme';

import LoginView from '../views/LoginView';
import LogoutView from '../views/LogoutView';
import RegisterView from '../views/RegisterView';
import MyPlaylists from '../containers/MyPlaylists';
import MySongs from '../containers/MySongs';
import YoutubeSongs from '../containers/YoutubeSongs';
import DefaultRoute from '../routes/DefaultRoute';

const SongListApp = props => (
  <SongListTheme>
    <BrowserRouter>
      <div>
        <Navbar {...props} />
        <div className="container">
          <Switch>
            <Route component={LoginView} path="/login" />
            <Route component={LogoutView} path="/logout" />
            <Route component={RegisterView} path="/register" />
            {props.user && <Route path="/youtube" component={YoutubeSongs} />}
            {props.user && <Route path="/playlists" component={MyPlaylists} />}
            {props.user && <Route path="/mysongs" component={MySongs} />}
            <Route component={DefaultRoute} path="*" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </SongListTheme>
);

SongListApp.propTypes = {
  user: PropTypes.object,
};

SongListApp.defaultProps = {
  user: null,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(SongListApp);
