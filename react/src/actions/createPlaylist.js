import { CREATE_PLAYLIST } from '.';
import falcorModel from '../model/falcorModel';

async function createPlaylist(list, callback) {
  const newList = {
    title: list.title,
    description: list.description,
  };

  const newListID = await falcorModel
    .call('playlists.add', [newList])
    .then(result => falcorModel.getValue(['playlists', 'newListID']).then(listID => listID));

  newList.id = newListID;

  callback();

  return newList;
}

export default (list, callback) => ({
  type: CREATE_PLAYLIST,
  payload: createPlaylist(list, callback),
});
