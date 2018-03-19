export const SEARCH_MY_SONGS = 'SEARCH_MY_SONGS';

export default term => ({
  type: SEARCH_MY_SONGS,
  payload: term,
});
