import React from 'react';
import asListItem from '../../hoc/asListItem';

export default props => asListItem((song) => {
  const imageUrl = song.snippet.thumbnails.default.url;
  const name = song.snippet.title;

  return (
    <div className="video-list-item media">
      <div className="media-left">
        <img src={imageUrl} alt="" className="media-object" />
      </div>
      <div className="media-body">
        <div className="media-heading">{name}</div>
      </div>
    </div>
  );
})(props);
