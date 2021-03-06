import React from 'react';
import { withStyles } from 'material-ui/styles';

import { ClassesType, PlaylistType } from '../../types';

const styles = () => ({
  details: {
    marginTop: 10,
    padding: 10,
    border: ['3,', 'solid', '#ddd'],
    borderRadius: 4,
  },
});

const renderSongs = songs => songs.map(song => (
  <div key={song.id}>
    <div>Title: {song.title}</div>
    <div>Description: {song.description}</div>
    <br />
  </div>
));

const PlaylistDetail = ({ list, classes }) => {
  if (!list) {
    return <h5 className="col-md-8">Select A Playlist To See Its Content</h5>;
  }

  const { title, description, songs } = list;

  return (
    <div className="col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <h3> Playlist Detail ! </h3>
      </div>
      <div className={classes.details}>
        <div>{title}</div>
        <div>{description}</div>
        <h4> Songs </h4>
        {renderSongs(songs)}
      </div>
    </div>
  );
};

PlaylistDetail.propTypes = {
  classes: ClassesType.isRequired,
  list: PlaylistType,
};

PlaylistDetail.defaultProps = {
  list: null,
};

export default withStyles(styles)(PlaylistDetail);
