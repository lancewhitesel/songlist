import { FETCH_MY_PLAYLISTS } from '.';
import { queries } from '../data';

export default () => ({
  type: FETCH_MY_PLAYLISTS,
  payload: queries.fetchPlaylistList(),
});
