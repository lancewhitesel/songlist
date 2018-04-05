import gql from 'graphql-tag';

export default gql`
{
  playlistList {
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
