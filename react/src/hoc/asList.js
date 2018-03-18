import React from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List';

export default (Component) => {
  const ListComponent = ({ songs, onSelect }) => (
    <List>
      {songs.map(song => <Component key={song.id} song={song} onSelect={onSelect} />)}
    </List>
  );

  ListComponent.propTypes = {
    songs: PropTypes.arrayOf(PropTypes.object),
    onSelect: PropTypes.func,
  };

  ListComponent.defaultProps = {
    songs: [],
    onSelect: () => {},
  };

  return ListComponent;
};
