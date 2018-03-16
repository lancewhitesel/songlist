import React from 'react';

import withList from '../../hoc/withList';

import VideoListItem from './VideoListItem.jsx';

const VideoList = (props) => {
  return withList('Video List!', VideoListItem)(props);
}

export default VideoList;
