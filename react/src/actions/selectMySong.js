import { MY_SONG_SELECTED } from '.';

export default song => ({
  type: MY_SONG_SELECTED,
  payload: song,
});
