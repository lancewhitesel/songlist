import gql from 'graphql-tag';

export default gql`
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
