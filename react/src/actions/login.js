import { LOGIN } from '.';
// import falcorModel from '../model/falcorModel';

/*
async function login(credentials) {
  await falcorModel
    .call(['login'], [credentials])
    .then(result => result);

  const tokenRes = await falcorModel.getValue('login.token');
  if (tokenRes === 'INVALID') {
    const errorRes = await falcorModel.getValue('login.error');
    return { loginError: errorRes };
  }

  let user = null;
  if (tokenRes) {
    const username = await falcorModel.getValue('login.username');
    const role = await falcorModel.getValue('login.role');

    localStorage.setItem('token', tokenRes);
    localStorage.setItem('username', username);
    localStorage.setItem('role', role);

    user = {
      username,
      role,
      token: tokenRes,
    };
  }

  return user;
}
*/

function login() {
  console.warn('TODO - login is broken');
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
