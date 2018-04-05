import { FETCH_MY_PLAYLISTS } from '.';
import { apolloClient } from '../app';
import fetchPlaylists from './queries/fetchPlaylists';

async function fetchPlaylistData() {
  const playlists = await apolloClient.query({
    query: fetchPlaylists,
  });

  return playlists.data.playlistList;
}

export default () => ({
  type: FETCH_MY_PLAYLISTS,
  payload: fetchPlaylistData(),
});
