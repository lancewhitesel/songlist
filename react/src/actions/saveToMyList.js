import { SAVE_TO_MY_LIST } from '.';
import { apolloClient } from '../app';
import addSong from './mutations/addSong';

async function saveSong(song) {
  const newSong = await apolloClient.mutate({
    mutation: addSong,
    variables: {
      title: song.title,
      description: song.description,
      videoId: song.videoId,
      imageUrl: song.imageUrl,
    },
  }).then(({ data }) => {
    const addedSong = data.addSong;

    return {
      id: addedSong.id,
      title: addedSong.title,
      description: addedSong.description,
      videoId: addedSong.videoId,
      imageUrl: addedSong.imageUrl,
    };
  }).catch((err) => {
    console.err(err);
  });

  return newSong;
}

export default song => ({
  type: SAVE_TO_MY_LIST,
  payload: saveSong(song),
});
