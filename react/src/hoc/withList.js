import React from 'react';

const iterateOnSongs = (songs, Component) => {
  return songs.map((song) => {
    return <Component name={song.snippet.title} />
  });
}

export default function withList(title, ItemComponent) {
  return (props) => {
    return (
      <div>
        <h2 style={{textAlign: 'center'}}> {title} </h2>
        <ul>
          {iterateOnSongs(props.songs, ItemComponent)}
        </ul>
      </div>
    );
  }
}