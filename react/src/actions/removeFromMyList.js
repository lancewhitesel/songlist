import { REMOVE_FROM_MY_LIST } from '.';
import falcorModel from '../model/falcorModel';

async function removeSong(song) {
  const idToRemove = song.id;

  await falcorModel
    .call('songs.remove', [idToRemove]);

  return idToRemove;
}

export default song => ({
  type: REMOVE_FROM_MY_LIST,
  payload: removeSong(song),
});
