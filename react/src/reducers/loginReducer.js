import { LOGIN } from '../actions';

export default function (state = null, action) {
  if (action.type === LOGIN) {
    console.log('login reducer! ', action.payload);
    return {
      user: action.payload.username,
    };
  }

  return state;
}

