import axios from 'axios';

import { SAVE_TO_MY_LIST } from '.';

const URL = '/api/song';

export default (song) => {
  console.log('song!: ', song);
  console.log('song title!: ', song.title);
  const post = axios.post(URL, song);

  return {
    type: SAVE_TO_MY_LIST,
    payload: post,
  };
};
