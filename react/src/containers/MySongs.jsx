import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';

import selectMySong from '../actions/selectMySong';
import fetchMySongs from '../actions/fetchMySongs';
import searchMySongs from '../actions/searchMySongs';
import removeFromMyList from '../actions/removeFromMyList';

import SongList from '../components/SongList';
import VideoDetail from '../components/video/VideoDetail';
import SearchBar from '../components/search/SearchBar';
import { ClassesType, SongType, SongListType } from '../types';

const styles = t => ({
  content: {
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
        <Grid className={content} container spacing={8}>
          <Grid item sm={12} lg={8}>
            <VideoDetail song={selectedSong} />
          </Grid>
          <Grid item sm={12} lg={4}>
            <SongList
              songs={mySongs}
              onSelect={song => this.props.selectMySong(song)}
              onRemoveFromMyList={song => this.props.removeFromMyList(song)}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

MySongs.propTypes = {
  classes: ClassesType.isRequired,
  mySongs: SongListType.isRequired,
  selectedSong: SongType,
  selectMySong: PropTypes.func.isRequired,
  fetchMySongs: PropTypes.func.isRequired,
  searchMySongs: PropTypes.func.isRequired,
  removeFromMyList: PropTypes.func.isRequired,
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
  removeFromMyList,
})(MySongs);

export default withStyles(styles)(connectedComponent);
