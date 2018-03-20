import { SEARCH_MY_SONGS } from '.';

export default term => ({
  type: SEARCH_MY_SONGS,
  payload: term,
});
