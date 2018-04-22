import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import YoutubePlayer from 'youtube-player';

import { ClassesType, SongType } from '../../types';
import NO_OP from '../../utils';

const styles = theme => ({
  root: {
    width: '100%',
  },
  details: {
    marginTop: 10,
    padding: 10,
    border: ['3,', 'solid', '#ddd'],
    borderRadius: 4,
  },
});

class VideoDetail extends Component {
  constructor(props) {
    super(props);

    this.player = null;
  }

  componentDidUpdate() {
    const { song } = this.props;

    if (song && song.videoId) {
      this.playSong(song.videoId);
    }
  }

  playSong(videoId) {
    if (!this.player) {
      this.player = YoutubePlayer('song-player');
    }

    this.player.loadVideoById(videoId);
    this.player.playVideo();
    this.player.on('stateChange', (event) => {
      if (event.data === 0) {
        console.log('video ended!');
        this.props.onSongEnded();
      }
    });
  }

  render() {
    const { song, classes } = this.props;
    if (!song) {
      return <h5 className="col-md-8">Select A Song To See Its Video</h5>;
    }

    const { title, description } = song;
    // const url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    return (
      <div className={classes.root}>
        <div className="embed-responsive embed-responsive-16by9">
          <div id="song-player" />
        </div>
        <div className={classes.details}>
          <div>{title}</div>
          <div>{description}</div>
        </div>
      </div>
    );
  }
}

VideoDetail.propTypes = {
  classes: ClassesType.isRequired,
  song: SongType,
  onSongEnded: PropTypes.func,
};

VideoDetail.defaultProps = {
  song: null,
  onSongEnded: NO_OP,
};

export default withStyles(styles)(VideoDetail);
