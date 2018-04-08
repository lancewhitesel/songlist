import gql from 'graphql-tag';

import { apolloClient } from '../..';

const mutation = gql`
mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    id
    username
    role
    token
  }
}
`;

export default async ({ username, password }) => {
  const user = await apolloClient.mutate({
    mutation,
    variables: {
      username,
      password,
    },
  }).then(({ data }) => {
    const loggedInUser = data.login;

    if (loggedInUser && loggedInUser.token) {
      localStorage.setItem('token', loggedInUser.token);
      localStorage.setItem('username', loggedInUser.username);
      localStorage.setItem('role', loggedInUser.role);
    }

    return loggedInUser;
  }).catch((err) => {
    const errorString = (err.graphQLErrors && err.graphQLErrors[0].message) || err.message;
    return { loginError: errorString };
  });

  return user;
};
