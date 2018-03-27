import { PLAYLIST_SELECTED } from '../actions';

export default function (state = null, action) {
  if (action.type === PLAYLIST_SELECTED) {
    return action.payload;
  }

  return state;
}
