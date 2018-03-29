import React from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List';
import DEFAULT_FN from '../utils';
import { SongListType } from '../types';

export default (Component) => {
  const ListComponent = ({
    songs, onSelect, onSaveToMyList, onRemoveFromMyList,
  }) => (
    <List>
      {songs.map(song => (
        <Component
          key={song.id}
          song={song}
          onSelect={onSelect}
          onSaveToMyList={onSaveToMyList}
          onRemoveFromMyList={onRemoveFromMyList}
        />))}
    </List>
  );

  ListComponent.propTypes = {
    songs: SongListType,
    onSelect: PropTypes.func,
    onSaveToMyList: PropTypes.func,
    onRemoveFromMyList: PropTypes.func,
  };

  ListComponent.defaultProps = {
    songs: [],
    onSelect: DEFAULT_FN,
    onSaveToMyList: null,
    onRemoveFromMyList: null,
  };

  return ListComponent;
};
