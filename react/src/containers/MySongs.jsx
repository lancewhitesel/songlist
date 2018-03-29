import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

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
    this.props.fetchMySongs();
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
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  mySongs: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedSong: PropTypes.objectOf(PropTypes.string),
  selectMySong: PropTypes.func.isRequired,
  fetchMySongs: PropTypes.func.isRequired,
  searchMySongs: PropTypes.func.isRequired,
};

MySongs.defaultProps = {
  selectedSong: {},
};


function mapStateToProps({ mySongs, selectedSong }) {
  const mySongsArr = Object.values(mySongs || {}).map(s => s);

  return {
    mySongs: mySongsArr,
    selectedSong,
  };
}

const connectedComponent = connect(mapStateToProps, {
  selectMySong,
  fetchMySongs,
  searchMySongs,
})(MySongs);

export default withStyles(styles)(connectedComponent);
