import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import Typography from 'material-ui/Typography';
import YTSearch from 'youtube-api-search';

import API_KEY from '../services/keys';

import SearchBar from './search/SearchBar.jsx';
import TextList from './text/TextList.jsx';
import VideoList from './video/VideoList.jsx';

const theme = createMuiTheme();
const styles = theme => ({
  h1: {
    color: 'purple'
  },
  content: {
    display: 'flex',
    flexDirection: 'row'
  },
  listContainer: {
    width: '50%',
  }
});

class SongList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: []
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (songs) => {
      this.setState({ songs });
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Typography component="div">
          <h1>My Song List:</h1>
          <SearchBar />
          <div className={classes.content}>
            <div className={classes.listContainer}>
              <TextList songs={this.state.songs} />
            </div>
            <div className={classes.listContainer}>
              <VideoList songs={this.state.songs} />
            </div>
          </div>
        </Typography>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(SongList);