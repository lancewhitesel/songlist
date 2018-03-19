import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './nav/Navbar';
import SongListTheme from './SongListTheme';

import MyPlaylists from '../containers/MyPlaylists';
import MySongs from '../containers/MySongs';
import YoutubeSongs from '../containers/YoutubeSongs';

const SongListApp = props => (
  <SongListTheme>
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="container">
          <Route path="/youtube" component={YoutubeSongs} />
          <Route path="/playlists" component={MyPlaylists} />
          <Route exact path="/" component={MySongs} />
        </div>
      </div>
    </BrowserRouter>
  </SongListTheme>
);

export default SongListApp;
