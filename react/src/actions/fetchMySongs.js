import { FETCH_MY_SONGS } from '.';
import { queries } from '../data';

export default () => ({
  type: FETCH_MY_SONGS,
  payload: queries.fetchSongList(),
});
