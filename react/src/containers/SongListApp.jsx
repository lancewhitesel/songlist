import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navbar from '../components/nav/Navbar';
import SongListTheme from '../components/SongListTheme';

import LoginView from '../views/LoginView';
import LogoutView from '../views/LogoutView';
import SignupView from '../views/SignupView';
import MySongs from '../containers/MySongs';
import YoutubeSongs from '../containers/YoutubeSongs';
import MyPlaylists from '../containers/MyPlaylists';
import AddPlaylist from '../containers/AddPlaylist';
import DefaultRoute from '../routes/DefaultRoute';
import fetchMySongs from '../actions/fetchMySongs';
import { UserType } from '../types';
import requireAuth from '../hoc/requireAuth';

class SongListApp extends Component {
  componentWillMount() {
    this.props.fetchMySongs();
  }

  render() {
    return (
      <SongListTheme>
        <BrowserRouter>
          <div>
            <Navbar {...this.props} />
            <div className="container">
              <Switch>
                <Route component={LoginView} path="/login" />
                <Route component={LogoutView} path="/logout" />
                <Route component={SignupView} path="/signup" />
                <Route path="/youtube" component={requireAuth(YoutubeSongs)} />
                <Route path="/mysongs" component={requireAuth(MySongs)} />
                <Route path="/playlists" component={requireAuth(MyPlaylists)} />
                <Route path="/addplaylist" component={requireAuth(AddPlaylist)} />
                <Route component={DefaultRoute} path="*" />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </SongListTheme>
    );
  }
}

SongListApp.propTypes = {
  user: UserType,
  fetchMySongs: PropTypes.func.isRequired,
};

SongListApp.defaultProps = {
  user: null,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, { fetchMySongs })(SongListApp);
