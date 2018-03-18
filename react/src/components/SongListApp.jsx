import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import SongListTheme from './SongListTheme';

import SongList from '../containers/SongList';
import VideoDetail from '../containers/VideoDetail';
import YoutubeSearch from '../containers/YoutubeSearch';

const styles = t => ({
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
});

const SongListApp = (props) => {
  const { content } = props.classes;

  return (
    <SongListTheme>
      <div className="container">
        <h1>Lance&#39;s Song List:</h1>
        <YoutubeSearch starterTerm="contemporary christian" />
        <div className={content}>
          <VideoDetail />
          <SongList />
        </div>
      </div>
    </SongListTheme>
  );
};

SongListApp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SongListApp);
