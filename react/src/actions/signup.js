import { SIGNUP } from '.';
import { apolloClient } from '../app';
import signupMutation from './mutations/signup';

async function signup({
  username, password, firstName, lastName, email,
}) {
  const signupResult = await apolloClient.mutate({
    mutation: signupMutation,
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
}

export default (newUserInfo) => {
  let result = null;
  if (newUserInfo) {
    result = signup(newUserInfo);
  }

  return {
    type: SIGNUP,
    payload: result,
  };
};
