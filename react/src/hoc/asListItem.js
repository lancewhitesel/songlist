import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemSecondaryAction } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import LibraryAddIcon from 'material-ui-icons/LibraryAdd';
import LibraryMusicIcon from 'material-ui-icons/LibraryMusic';
import { withStyles } from 'material-ui/styles';

import DEFAULT_FN from '../utils';
import { ClassesType, SongType } from '../types';

const styles = theme => ({
  button: {
    zIndex: theme.zIndex.appBar,
  },
});

const SaveToListButton = withStyles(styles)(({ isInMyList, classes, onClick }) => (
  <ListItemSecondaryAction>
    {!isInMyList &&
    <IconButton
      aria-label="Add To My Songs"
      className={classes.button}
      onClick={onClick}
    >
      <LibraryAddIcon />
    </IconButton>}
    {isInMyList &&
    <IconButton
      aria-label="In My Songs"
      className={classes.button}
      onClick={onClick}
    >
      <LibraryMusicIcon />
    </IconButton>}
  </ListItemSecondaryAction>
));

export default (render) => {
  const ListItemComponent = ({
    song, onSelect, onSaveToMyList, onRemoveFromMyList, classes,
  }) => (
    <ListItem className="list-group-item">
      <div className="list-item" onClick={() => onSelect(song)} role="button" tabIndex={0}>
        {render(song)}
      </div>
      {onSaveToMyList && <SaveToListButton
        isInMyList={song.isInMySongs}
        onClick={() => {
          song.isInMySongs
            ? onRemoveFromMyList(song)
            : onSaveToMyList(song);
        }}
      />}
    </ListItem>
  );

  ListItemComponent.propTypes = {
    onSaveToMyList: PropTypes.func,
    onRemoveFromMyList: PropTypes.func,
    onSelect: PropTypes.func,
    song: SongType,
    classes: ClassesType.isRequired,
  };

  ListItemComponent.defaultProps = {
    onSaveToMyList: null,
    onRemoveFromMyList: null,
    onSelect: DEFAULT_FN,
    song: {},
  };

  return ListItemComponent;
};
