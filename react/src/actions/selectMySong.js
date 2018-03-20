import { MY_SONG_SELECTED } from '.';

export default function selectMySong(song) {
  // Here is the action.
  console.log('selecting my song: ', song);
  return {
    type: MY_SONG_SELECTED,
    payload: song,
  };
}
