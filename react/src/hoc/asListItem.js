import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';

export default (render) => {
  const ListItemComponent = ({ song, onSelect }) => (
    <ListItem className="list-group-item">
      <div className="list-item" onClick={() => onSelect(song)} role="button" tabIndex={0}>
        {render(song)}
      </div>
    </ListItem>
  );

  ListItemComponent.propTypes = {
    onSelect: PropTypes.func,
    song: PropTypes.object,
  };

  ListItemComponent.defaultProps = {
    onSelect: () => {},
    song: {},
  };

  return ListItemComponent;
};
