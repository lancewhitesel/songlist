import React from 'react';
import PropTypes from 'prop-types';

const iterateOnSongs = (songs, Component, callback) =>
  songs.map(song => <Component key={song.etag} song={song} onSelect={callback} />);

const asList = (title, ItemComponent, callback) => {
  const ListComponent = props => (
    <div className="container">
      <h2 style={{ textAlign: 'center' }}> {title} </h2>
      <ul>
        {iterateOnSongs(props.songs, ItemComponent, callback)}
      </ul>
    </div>
  );

  ListComponent.propTypes = {
    songs: PropTypes.arrayOf(PropTypes.object)
  };

  ListComponent.defaultProps = {
    songs: []
  };

  return ListComponent;
};

export default asList;
