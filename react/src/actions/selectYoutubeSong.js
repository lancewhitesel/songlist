import { YOUTUBE_SONG_SELECTED } from '.';

export default song => ({
  type: YOUTUBE_SONG_SELECTED,
  payload: song,
});
