// import axios from 'axios';
import falcorModel from '../model/falcorModel';

import { SAVE_TO_MY_LIST } from '.';

// const URL = '/api/song';

async function saveSong(song) {
  const newSong = {
    id: '7',
    title: song.title,
    description: song.description,
  };

  const newSongID = await falcorModel
    .call('songs.add', [newSong])
    .then((result) => {
      console.log('results: ', result);
      falcorModel.getValue(['songs', 'newSongID']).then(songID => songID);
    });

  /*
  const results = [{
  path: ['songs', res.count-1],
  value: newSongRef
  }, {
  path: ['songs', 'newSongID'],
  value: newSongID
  }, {
  path: ['songs', 'length'],
  value: res.count
  }];
  */

  newSong.id = newSongID;
  console.log('newSong: ', newSong);

  return song;
}

export default (song) => {
  console.log('song!: ', song);
  console.log('song title!: ', song.title);

  // const post = axios.post(URL, song);

  return {
    type: SAVE_TO_MY_LIST,
    payload: saveSong(song),
  };
};
