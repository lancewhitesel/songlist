// import axios from 'axios';

import { FETCH_MY_SONGS } from '.';

// const ROOT_URL = '/api/list';

export default function fetchMySongs(songs) {
  // const fetch = axios.get(ROOT_URL, {});

  return {
    type: FETCH_MY_SONGS,
    // payload: fetch,
    payload: songs,
  };
}
