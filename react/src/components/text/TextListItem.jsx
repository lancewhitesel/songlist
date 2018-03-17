import React from 'react';
import PropTypes from 'prop-types';

const TextListItem = ({ song, onSelect }) => (
  <li className="list-group-item">
    <div className="list-item" onClick={() => onSelect(song)} role="button" tabIndex={0}>
      <b>Song: </b> {song.snippet.title}
    </div>
  </li>
);

TextListItem.propTypes = {
  onSelect: PropTypes.func,
  song: PropTypes.object,
};

TextListItem.defaultProps = {
  onSelect: () => {},
  song: {},
};

export default TextListItem;
