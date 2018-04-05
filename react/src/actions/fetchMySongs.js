import { FETCH_MY_SONGS } from '.';
import { apolloClient } from '../app';
import fetchSongs from './queries/fetchSongs';

async function fetchSongData() {
  const songs = await apolloClient.query({
    query: fetchSongs,
  });

  return songs.data.songList;
}

export default () => ({
  type: FETCH_MY_SONGS,
  payload: fetchSongData(),
});
