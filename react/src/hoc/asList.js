import React from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List';
import { DEFAULT_FN } from '../utils';

export default (Component) => {
  const ListComponent = ({ songs, onSelect, onSaveToMyList }) => (
    <List>
      {songs.map(song => (
        <Component
          key={song.id}
          song={song}
          onSelect={onSelect}
          onSaveToMyList={onSaveToMyList}
        />))}
    </List>
  );

  ListComponent.propTypes = {
    songs: PropTypes.arrayOf(PropTypes.object),
    onSelect: PropTypes.func,
    onSaveToMyList: PropTypes.func,
  };

  ListComponent.defaultProps = {
    songs: [],
    onSelect: DEFAULT_FN,
    onSaveToMyList: null,
  };

  return ListComponent;
};
