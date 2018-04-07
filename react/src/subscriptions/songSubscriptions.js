import gql from 'graphql-tag';

const songAddedSubscription = gql`
  subscription {
    songAdded {
      id
      title
    }
  }
`;

export default songAddedSubscription;
