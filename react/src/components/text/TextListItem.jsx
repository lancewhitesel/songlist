import React from 'react';
import asListItem from '../../hoc/asListItem';

export default props => asListItem(song => (
  <div><b>Song: </b> {song.snippet.title}</div>
))(props);
