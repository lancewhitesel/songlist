import { CREATE_PLAYLIST } from '.';
import { mutations } from '../data';

export default (list, callback) => ({
  type: CREATE_PLAYLIST,
  payload: mutations.savePlaylist(list, callback),
});
