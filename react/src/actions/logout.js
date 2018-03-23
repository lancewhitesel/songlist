import { LOGOUT } from '.';

export default () => {
  if (typeof localStorage !== 'undefined' && localStorage.token) {
    delete localStorage.token;
    delete localStorage.username;
    delete localStorage.role;
  }

  return {
    type: LOGOUT,
  };
};
