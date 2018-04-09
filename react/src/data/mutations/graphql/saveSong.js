import gql from 'graphql-tag';

import { apolloClient } from '../..';

const mutation = gql`
mutation AddSong($title: String!, $artist: String, $description: String, $videoId: String!, $imageUrl: String) {
  addSong(title: $title, artist: $artist, description: $description, videoId: $videoId, imageUrl: $imageUrl) {
    id
    title
    description
    videoId
    imageUrl
  }
}
`;

export default async (song) => {
  const newSong = await apolloClient.mutate({
    mutation,
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
    console.log(err);
  });

  return newSong;
};
