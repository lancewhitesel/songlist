import gql from 'graphql-tag';

import { apolloClient } from '../../';

const query = gql`
{
  songList {
    id
    title
    description
    imageUrl
    videoId
  }
}
`;
export { query };

export default async () => {
  const songs = await apolloClient.query({
    query,
  });

  return songs.data.songList;
};
