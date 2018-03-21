import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import falcorModel from '../model/falcorModel';

import selectMySong from '../actions/selectMySong';
import fetchMySongs from '../actions/fetchMySongs';
import searchMySongs from '../actions/searchMySongs';

import SongList from '../components/SongList';
import VideoDetail from '../components/video/VideoDetail';
import SearchBar from '../components/search/SearchBar';

const styles = t => ({
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
});

class MySongs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.fetchMySongs();
  }

  async fetchMySongs() {
    const x = this;
    const numberSongs = await falcorModel.getValue('songs.length').then(length => length);
    const songs = await falcorModel.get(['songs',
      { from: 0, to: numberSongs - 1 },
      ['id', 'title', 'description']]).then(songResponse => songResponse.json.songs);

    this.props.fetchMySongs(songs);
  }

  render() {
    const {
      classes: { content },
      mySongs,
      selectedSong,
    } = this.props;

    return (
      <div>
        <SearchBar onSearchTermChange={term => this.props.searchMySongs(term)} />
        <div className={content}>
          <VideoDetail song={selectedSong} />
          <SongList songs={mySongs} onSelect={song => this.props.selectMySong(song)} />
        </div>
      </div>
    );
  }
}

MySongs.propTypes = {
  classes: PropTypes.object.isRequired,
  mySongs: PropTypes.array.isRequired,
  selectedSong: PropTypes.object,
  selectMySong: PropTypes.func.isRequired,
  fetchMySongs: PropTypes.func.isRequired,
  searchMySongs: PropTypes.func.isRequired,
};

MySongs.defaultProps = {
  selectedSong: {},
};


function mapStateToProps({ mySongs, selectedSong }) {
  return { mySongs, selectedSong };
}

const connectedComponent = connect(mapStateToProps, {
  selectMySong,
  fetchMySongs,
  searchMySongs,
})(MySongs);

export default withStyles(styles)(connectedComponent);
