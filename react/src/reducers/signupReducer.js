import { SIGNUP } from '../actions';

export default function (state = null, action) {
  if (action.type === SIGNUP) {
    return action.payload;
  }

  return state;
}

