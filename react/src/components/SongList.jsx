import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import CssBaseline from 'material-ui/CssBaseline';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';

import YTSearch from 'youtube-api-search';
import classNames from 'classnames';

import API_KEY from '../services/keys';

import SearchBar from './search/SearchBar';
import VideoDetail from './video/VideoDetail';
import TypeTabs from './TypeTabs';

const theme = createMuiTheme();
const styles = t => ({
  h1: {
    color: 'purple'
  },
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
  listContainer: {
    // width: '50%',
  }
});

class SongList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: null,
      selectedSong: null
    };

    YTSearch({ key: API_KEY, term: 'david whitworth drummer' }, (songs) => {
      this.setState({
        songs,
        selectedSong: songs[0]
      });
    });

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedSong) {
    this.setState({ selectedSong });
  }

  render() {
    const { content, full, centered } = this.props.classes;
    const classes = classNames(content, full, centered);
    const { songs, selectedSong } = this.state;

    if (!songs) {
      return <div className={classes}><CircularProgress size={250} /></div>;
    }

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Typography component="div">
          <h1>My Song List:</h1>
          <SearchBar />
          <VideoDetail song={selectedSong} />
          <TypeTabs songs={songs} onSelect={this.handleSelect} />
        </Typography>
      </MuiThemeProvider>
    );
  }
}

SongList.propTypes = {
  classes: PropTypes.object
};

SongList.defaultProps = {
  classes: {}
};

export default withStyles(styles)(SongList);

