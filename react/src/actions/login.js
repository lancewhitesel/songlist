import { LOGIN } from '.';
import { apolloClient } from '../app';
import loginMutation from './mutations/login';

async function login({ username, password }) {
  const user = await apolloClient.mutate({
    mutation: loginMutation,
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
}

export default (credentials) => {
  let user = null;
  if (credentials) {
    user = login(credentials);
  } else if (localStorage && localStorage.token && localStorage.username && localStorage.role) {
    const { username, token, role } = localStorage;
    user = {
      username,
      role,
      token,
    };
  }

  return {
    type: LOGIN,
    payload: user,
  };
};
