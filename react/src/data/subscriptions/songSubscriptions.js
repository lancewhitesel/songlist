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

const songRemovedSubscription = gql`
  subscription {
    songRemoved {
      id
    }
  }
`;

export default {
  songAddedSubscription,
  songRemovedSubscription,
};
