import { REGISTER } from '../actions';

export default function (state = null, action) {
  if (action.type === REGISTER) {
    return action.payload;
  }

  return state;
}

