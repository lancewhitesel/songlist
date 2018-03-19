// This is an ActionCreator, which needs to return an action.  An action
//  will always contain a type and can optionally contain a payload.
export const MY_SONG_SELECTED = 'MY_SONG_SELECTED';

export default function selectMySong(song, type) {
  // Here is the action.
  console.log('selecting my song: ', song);
  return {
    type: MY_SONG_SELECTED,
    payload: song,
  };
}
