import { LOGIN, LOGOUT } from '../actions';

export default function (state = null, action) {
  if (action.type === LOGIN) {
    return action.payload;
  } else if (action.type === LOGOUT) {
    return null;
  }

  return state;
}

