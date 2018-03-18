import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

import PropTypes from 'prop-types';
import YTSearch from 'youtube-api-search';
import classNames from 'classnames';
import _ from 'lodash';

import API_KEY from '../services/keys';

import SongListTheme from './SongListTheme';
import SearchBar from './search/SearchBar';

import SongList from '../containers/SongList';
import VideoDetail from '../containers/VideoDetail';

const styles = t => ({
  full: {
    width: '100vw',
    height: '100vh'
  },
  content: {
    display: 'flex',
    flexDirection: 'row'
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center'
  },
});

class SongListApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: null,
    };

    this.videoSearch('contemporary christian');
  }

  videoSearch(term) {
    const videoSearchDebounce = _.debounce(() => {
      YTSearch({ key: API_KEY, term }, (songs) => {
        // console.log(songs);
        this.setState({
          songs,
        });
      });
    }, 300);

    videoSearchDebounce();
  }


  render() {
    const { songs } = this.state;
    const {
      classes: {
        content, full, centered
      }
    } = this.props;
    const progressClasses = classNames(content, full, centered);

    if (!songs) {
      return <div className={progressClasses}><CircularProgress size={250} /></div>;
    }

    return (
      <SongListTheme>
        <div className="container">
          <h1>Lance&#39;s Song List:</h1>
          <SearchBar onSearchTermChange={t => this.videoSearch(t)} />
          <div className={content}>
            <VideoDetail />
            <SongList />
          </div>
        </div>
      </SongListTheme>
    );
  }
}

SongListApp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SongListApp);
