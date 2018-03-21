import { LOGIN } from '.';

export default user => ({
  type: LOGIN,
  payload: user,
});
