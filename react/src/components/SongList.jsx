import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';

import PropTypes from 'prop-types';
import YTSearch from 'youtube-api-search';
import classNames from 'classnames';
import _ from 'lodash';

import API_KEY from '../services/keys';

import SearchBar from './search/SearchBar';
import VideoDetail from './video/VideoDetail';
import TypeTabs from './TypeTabs';

const theme = createMuiTheme();
const styles = t => ({
  root: {
    '& h1': {
      textAlign: 'center',
      color: 'blue'
    },
    '& .media-object': {
      maxWidth: '64px',
      marginRight: '15px'
    },
    '& .list-group-item': {
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#eee'
      }
    },
    '& .container': {
      marginBottom: 100
    }
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
});

class SongList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: null,
      selectedSong: null
    };

    this.videoSearch('contemporary christian');
  }

  handleSelect(selectedSong) {
    this.setState({ selectedSong });
  }

  videoSearch(term) {
    const videoSearchDebounce = _.debounce(() => {
      YTSearch({ key: API_KEY, term }, (songs) => {
        this.setState({
          songs,
          selectedSong: songs[0]
        });
      });
    }, 300);

    videoSearchDebounce();
  }


  render() {
    const { songs, selectedSong } = this.state;
    const {
      classes: {
        content, full, centered, root
      }
    } = this.props;
    const progressClasses = classNames(content, full, centered);

    if (!songs) {
      return <div className={progressClasses}><CircularProgress size={250} /></div>;
    }

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Typography component="div" className={root}>
          <div className="container">
            <h1>My Song List:</h1>
            <SearchBar onSearchTermChange={t => this.videoSearch(t)} />
            <div className={content}>
              <VideoDetail song={selectedSong} />
              <TypeTabs songs={songs} onSelect={s => this.handleSelect(s)} />
            </div>
          </div>
        </Typography>
      </MuiThemeProvider>
    );
  }
}

SongList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SongList);
