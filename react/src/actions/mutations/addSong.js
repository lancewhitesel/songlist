import gql from 'graphql-tag';

export default gql`
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
