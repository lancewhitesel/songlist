import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import selectYoutubeSong from '../actions/selectYoutubeSong';

import SongList from '../components/SongList';
import VideoDetail from '../components/video/VideoDetail';
import YoutubeSearch from '../components/search/YoutubeSearch';

const styles = t => ({
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
});

class YoutubeSongs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      classes: { content },
      youtubeSongs,
      selectedYoutubeSong,
    } = this.props;

    return (
      <div>
        <YoutubeSearch starterTerm="contemporary christian" />
        <div className={content}>
          <VideoDetail song={selectedYoutubeSong} />
          <SongList songs={youtubeSongs} onSelect={song => this.props.selectYoutubeSong(song)} />
        </div>
      </div>
    );
  }
}

YoutubeSongs.propTypes = {
  classes: PropTypes.object.isRequired,
  youtubeSongs: PropTypes.array.isRequired,
  selectedYoutubeSong: PropTypes.object,
  selectYoutubeSong: PropTypes.func.isRequired,
};

YoutubeSongs.defaultProps = {
  selectedYoutubeSong: {},
};

function mapStateToProps({ youtubeSongs, selectedYoutubeSong }) {
  return { youtubeSongs, selectedYoutubeSong };
}

// Anything returned from this function will end up as props
//   on the SongList container.
function mapDispatchToProps(dispatch) {
  // This wires up our selectSong action creator
  //  to all of our reducers.
  return bindActionCreators({ selectYoutubeSong }, dispatch);
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(YoutubeSongs));
