import { SAVE_TO_MY_LIST } from '.';
import { mutations } from '../data';

export default song => ({
  type: SAVE_TO_MY_LIST,
  payload: mutations.saveSong(song),
});
