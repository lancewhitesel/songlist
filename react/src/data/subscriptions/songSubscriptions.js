import gql from 'graphql-tag';

const songAddedSubscription = gql`
  subscription {
    songAdded {
      id
      title
      imageUrl
      videoId
      description
    }
  }
`;

export default songAddedSubscription;
