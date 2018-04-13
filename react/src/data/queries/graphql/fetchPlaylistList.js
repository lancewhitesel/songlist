import gql from 'graphql-tag';

import { apolloClient } from '../../';

const query = gql`
{
  playlistList {
    id
    title
    description
    songs {
      id
      title
      description
    }
  }
}
`;

export default async () => {
  const playlists = await apolloClient.query({
    query,
  });

  return playlists.data.playlistList;
};
