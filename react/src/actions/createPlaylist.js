import { CREATE_PLAYLIST } from '.';
import { apolloClient } from '../app';
import addPlaylist from './mutations/addPlaylist';

async function createPlaylist(list, callback) {
  const newList = await apolloClient.mutate({
    mutation: addPlaylist,
    variables: {
      title: list.title,
      description: list.description,
      songs: list.songs || [],
    },
  }).then(({ data }) => {
    const addedPlaylist = data.addPlaylist;

    return {
      id: addedPlaylist.id,
      title: addedPlaylist.title,
      description: addedPlaylist.description,
      songs: addPlaylist.songs,
    };
  }).catch((err) => {
    console.err(err);
  });

  callback();

  return newList;
}

export default (list, callback) => ({
  type: CREATE_PLAYLIST,
  payload: createPlaylist(list, callback),
});
