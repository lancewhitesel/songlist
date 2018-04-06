import { REMOVE_FROM_MY_LIST } from '.';
import { apolloClient } from '../app';
import removeSongMutation from './mutations/removeSong';

async function removeSong(song) {
  return apolloClient.mutate({
    mutation: removeSongMutation,
    variables: {
      id: song.id,
    },
  }).then(({ data }) => data.removeSong.id)
    .catch((err) => {
      console.err(err);
    });
}

export default song => ({
  type: REMOVE_FROM_MY_LIST,
  payload: removeSong(song),
});
