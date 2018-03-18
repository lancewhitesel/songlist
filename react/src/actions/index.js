
// This is an ActionCreator, which needs to return an action.  An action
//  will always contain a type and can optionally contain a payload.
export default function selectSong(song) {
  // Here is the action.
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
}
