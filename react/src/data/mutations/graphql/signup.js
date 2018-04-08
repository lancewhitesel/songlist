import gql from 'graphql-tag';

import { apolloClient } from '../..';

const mutation = gql`
mutation Signup(
  $username: String!,
  $password: String!,
  $firstName: String,
  $lastName: String,
  $email: String
) {
  signup(username: $username, password: $password, firstName: $firstName, lastName: $lastName, email: $email) {
    id
  }
}
`;

export default async ({
  username, password, firstName, lastName, email,
}) => {
  const signupResult = await apolloClient.mutate({
    mutation,
    variables: {
      username,
      password,
      firstName,
      lastName,
      email,
    },
  }).then(({ data }) => {
    if (data && data.signup && data.signup.id) {
      return { signupSuccess: true };
    }
    return null;
  }).catch((err) => {
    const errorString = (err.graphQLErrors && err.graphQLErrors[0].message) || err.message;
    return { signupError: errorString };
  });

  return signupResult;
};
