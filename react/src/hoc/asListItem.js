import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemSecondaryAction } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import LibraryAddIcon from 'material-ui-icons/LibraryAdd';
import { withStyles } from 'material-ui/styles';

import { DEFAULT_FN } from '../utils';

const styles = theme => ({
  button: {
    zIndex: theme.zIndex.appBar,
  },
});

const SaveToListButton = withStyles(styles)(({ classes, onClick }) => (
  <ListItemSecondaryAction>
    <IconButton
      aria-label="Add To My Songs"
      className={classes.button}
      onClick={onClick}
    >
      <LibraryAddIcon />
    </IconButton>
  </ListItemSecondaryAction>
));

export default (render) => {
  const ListItemComponent = ({
    song, onSelect, onSaveToMyList, classes,
  }) => (
    <ListItem className="list-group-item">
      <div className="list-item" onClick={() => onSelect(song)} role="button" tabIndex={0}>
        {render(song)}
      </div>
      {onSaveToMyList && <SaveToListButton onClick={e => onSaveToMyList(song)} />}
    </ListItem>
  );

  ListItemComponent.propTypes = {
    onSaveToMyList: PropTypes.func,
    onSelect: PropTypes.func,
    song: PropTypes.object,
    classes: PropTypes.object.isRequired,
  };

  ListItemComponent.defaultProps = {
    onSaveToMyList: null,
    onSelect: DEFAULT_FN,
    song: {},
  };

  return ListItemComponent;
};
