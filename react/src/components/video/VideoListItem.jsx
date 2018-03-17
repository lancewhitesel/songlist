import React from 'react';
import PropTypes from 'prop-types';

const VideoListItem = ({ song, onSelect }) => {
  const imageUrl = song.snippet.thumbnails.default.url;
  const name = song.snippet.title;
  // console.log(song);

  return (
    <li className="list-group-item">
      <div className="video-list media" onClick={() => onSelect(song)} role="button" tabIndex={0}>
        <div className="media-left">
          <img src={imageUrl} alt="" className="media-object" />
        </div>
        <div className="media-body">
          <div className="media-heading">{name}</div>
        </div>
      </div>
    </li>
  );
};

VideoListItem.propTypes = {
  onSelect: PropTypes.func,
  song: PropTypes.object,
};

VideoListItem.defaultProps = {
  onSelect: () => {},
  song: {},
};

export default VideoListItem;
