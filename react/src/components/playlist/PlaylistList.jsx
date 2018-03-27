import React from 'react';
import PropTypes from 'prop-types';
import List, { ListItem } from 'material-ui/List';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';

import DEFAULT_FN from '../../utils';

const generatePlaylistItems = (lists, onSelect) =>
  lists.map(list => (
    <ListItem className="list-group-item" key={list.id}>
      <div className="list-item" onClick={() => onSelect(list)} role="button" tabIndex={0}>
        <b>{list.title}</b>
        <br />
        <b>{list.description}</b>
      </div>
    </ListItem>
  ));

const PlaylistList = (props) => {
  const { lists, onSelect } = props;

  return (
    <div>
      <Link to="/addplaylist" component="div">
        <Button color="primary" variant="raised">
          Add New Playlist
        </Button>
      </Link>
      <List>
        {generatePlaylistItems(lists, onSelect)}
      </List>
    </div>
  );
};

PlaylistList.propTypes = {
  lists: PropTypes.array,
  onSelect: PropTypes.func,
};

PlaylistList.defaultProps = {
  lists: [],
  onSelect: DEFAULT_FN,
};

export default PlaylistList;
