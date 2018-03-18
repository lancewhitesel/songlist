import React from 'react';
import asListItem from '../../hoc/asListItem';

export default props => asListItem((song) => {
  const { imageUrl, title } = song;

  return (
    <div className="video-list-item media">
      <div className="media-left">
        <img src={imageUrl} alt="" className="media-object" />
      </div>
      <div className="media-body">
        <div className="media-heading">{title}</div>
      </div>
    </div>
  );
})(props);
