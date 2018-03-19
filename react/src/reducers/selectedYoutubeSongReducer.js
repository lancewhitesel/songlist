import { YOUTUBE_SONG_SELECTED } from '../actions/selectYoutubeSong';

// Start argument is not application state, but only the state for
//  which this reducer is responsible.  Always return a fresh object
//  from a reducer.
export default function (state = null, action) {
  if (action.type === YOUTUBE_SONG_SELECTED) {
    return action.payload;
  }

  return state;
}
