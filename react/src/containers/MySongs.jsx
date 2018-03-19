import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import selectMySong from '../actions/selectMySong';
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
    this.props.searchMySongs();
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
  searchMySongs: PropTypes.func.isRequired,
};

MySongs.defaultProps = {
  selectedSong: {},
};


function mapStateToProps({ mySongs, selectedSong }) {
  return { mySongs, selectedSong };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectMySong, searchMySongs }, dispatch);
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MySongs));
