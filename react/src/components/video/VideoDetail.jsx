import React from 'react';
import PropTypes from 'prop-types';

const VideoDetail = ({ song }) => {
  const { videoId } = song.id;
  const url = `https://www.youtube.com/embed/${videoId}`;
  const { title } = song.snippet;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          src={url}
          frameBorder="0"
          className="embed-responsive-item"
          title={title}
        />
      </div>
      <div className="details">
        <div>{title}</div>
        <div>{song.snippet.description}</div>
      </div>
    </div>

  );
};

VideoDetail.propTypes = {
  song: PropTypes.object.isRequired,
};

export default VideoDetail;
