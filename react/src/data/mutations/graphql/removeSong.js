import gql from 'graphql-tag';

import { apolloClient } from '../..';

const mutation = gql`
mutation DeleteSong($id: ID!) {
  deleteSong(id: $id) {
    id
  }
}
`;

export default async song =>
  apolloClient.mutate({
    mutation,
    variables: {
      id: song.id,
    },
  }).then(({ data }) => data.removeSong.id)
    .catch((err) => {
      console.err(err);
    });
