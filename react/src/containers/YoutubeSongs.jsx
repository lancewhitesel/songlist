import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import selectYoutubeSong from '../actions/selectYoutubeSong';
import saveToMyList from '../actions/saveToMyList';

import SongList from '../components/SongList';
import VideoDetail from '../components/video/VideoDetail';
import YoutubeSearch from './YoutubeSearch';

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
          <SongList
            songs={youtubeSongs}
            onSelect={song => this.props.selectYoutubeSong(song)}
            onSaveToMyList={song => this.props.saveToMyList(song)}
          />
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
  saveToMyList: PropTypes.func.isRequired,
};

YoutubeSongs.defaultProps = {
  selectedYoutubeSong: {},
};

function mapStateToProps({ youtubeSongs, selectedYoutubeSong }) {
  return { youtubeSongs, selectedYoutubeSong };
}

const connectedComponent = connect(mapStateToProps, {
  selectYoutubeSong,
  saveToMyList,
})(YoutubeSongs);
export default withStyles(styles)(connectedComponent);
