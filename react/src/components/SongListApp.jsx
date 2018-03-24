import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
import fetchMySongs from '../actions/fetchMySongs';

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
                <Route component={RegisterView} path="/register" />
                {this.props.user && <Route path="/youtube" component={YoutubeSongs} />}
                {this.props.user && <Route path="/playlists" component={MyPlaylists} />}
                {this.props.user && <Route path="/mysongs" component={MySongs} />}
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
  user: PropTypes.object,
  fetchMySongs: PropTypes.func.isRequired,
};

SongListApp.defaultProps = {
  user: null,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, { fetchMySongs })(SongListApp);
