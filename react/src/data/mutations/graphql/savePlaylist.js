import gql from 'graphql-tag';

import { apolloClient } from '../..';

const mutation = gql`
mutation AddPlaylist($title: String!, $description: String, $songs: [ID]!) {
  addPlaylist(title: $title, description: $description, songs: $songs) {
    id
    title
    description
    songs {
      id
      title
    }
  }
}
`;

export default async (list, callback) => {
  const newList = await apolloClient.mutate({
    mutation,
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
      songs: addedPlaylist.songs,
    };
  }).catch((err) => {
    console.log(err);
  });

  callback();

  return newList;
};
