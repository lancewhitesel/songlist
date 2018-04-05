import gql from 'graphql-tag';

export default gql`
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
