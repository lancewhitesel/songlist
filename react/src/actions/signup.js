import { SIGNUP } from '.';
import { mutations } from '../data';

export default (newUserInfo) => {
  let result = null;
  if (newUserInfo) {
    result = mutations.signup(newUserInfo);
  }

  return {
    type: SIGNUP,
    payload: result,
  };
};
