import { FETCH_MY_PLAYLISTS } from '.';
import falcorModel from '../model/falcorModel';

async function fetchPlaylistData() {
  const numberLists = await falcorModel.getValue('playlists.length').then(length => length);
  let lists = [];
  if (numberLists > 0) {
    lists = await falcorModel.get(['playlists',
      { from: 0, to: numberLists - 1 },
      ['_id', 'title', 'description']])
      .then(listsResponse => listsResponse.json.playlists);
  }

  return lists;
}

export default () => ({
  type: FETCH_MY_PLAYLISTS,
  payload: fetchPlaylistData(),
});
