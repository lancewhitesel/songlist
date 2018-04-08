import { REMOVE_FROM_MY_LIST } from '.';
import { mutations } from '../data';

export default song => ({
  type: REMOVE_FROM_MY_LIST,
  payload: mutations.removeSong(song),
});
