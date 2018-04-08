import { LOGIN } from '.';
import { mutations } from '../data';

export default (credentials) => {
  let user = null;
  if (credentials) {
    user = mutations.login(credentials);
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
