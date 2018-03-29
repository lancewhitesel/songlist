import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import selectYoutubeSong from '../actions/selectYoutubeSong';
import saveToMyList from '../actions/saveToMyList';
import removeFromMyList from '../actions/removeFromMyList';

import SongList from '../components/SongList';
import VideoDetail from '../components/video/VideoDetail';
import YoutubeSearch from './YoutubeSearch';

const styles = t => ({
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
});

const YoutubeSongs = (props) => {
  const {
    classes: { content },
    youtubeSongs,
    selectedYoutubeSong,
  } = props;

  return (
    <div>
      <YoutubeSearch starterTerm="contemporary christian" />
      <div className={content}>
        <VideoDetail song={selectedYoutubeSong} />
        <SongList
          songs={youtubeSongs}
          onSelect={song => props.selectYoutubeSong(song)}
          onSaveToMyList={song => props.saveToMyList(song)}
          onRemoveFromMyList={song => props.removeFromMyList(song)}
        />
      </div>
    </div>
  );
};

YoutubeSongs.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  youtubeSongs: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedYoutubeSong: PropTypes.objectOf(PropTypes.string),
  selectYoutubeSong: PropTypes.func.isRequired,
  saveToMyList: PropTypes.func.isRequired,
  removeFromMyList: PropTypes.func.isRequired,
};

YoutubeSongs.defaultProps = {
  selectedYoutubeSong: {},
};

function mapStateToProps({ mySongs, youtubeSongs, selectedYoutubeSong }) {
  const markedYouTubeSongs = youtubeSongs.map((s) => {
    const isInMySongs = !!mySongs[s.videoId];
    const initialData = {
      isInMySongs,
    };
    if (isInMySongs) {
      initialData.id = mySongs[s.videoId].id;
    }

    return {
      ...s,
      ...initialData,
    };
  });

  return {
    youtubeSongs: markedYouTubeSongs,
    selectedYoutubeSong,
  };
}

const connectedComponent = connect(mapStateToProps, {
  selectYoutubeSong,
  saveToMyList,
  removeFromMyList,
})(YoutubeSongs);

export default withStyles(styles)(connectedComponent);
