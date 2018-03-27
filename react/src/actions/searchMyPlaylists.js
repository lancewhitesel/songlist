import { SEARCH_MY_PLAYLISTS } from '.';

export default term => ({
  type: SEARCH_MY_PLAYLISTS,
  payload: term,
});
