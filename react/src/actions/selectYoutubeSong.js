export const YOUTUBE_SONG_SELECTED = 'YOUTUBE_SONG_SELECTED';

export default song => ({
  type: YOUTUBE_SONG_SELECTED,
  payload: song,
});
