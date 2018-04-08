import songAddedSubscription from './songSubscriptions';
import { SAVE_TO_MY_LIST } from '../../actions';

export default (client, store) => {
  client.subscribe({
    query: songAddedSubscription,
  }).subscribe({
    next: ({ data }) => {
      console.log('subscription fired!', data.song),
      store.dispatch({
        type: SAVE_TO_MY_LIST,
        payload: data.songAdded,
      });
    },
  });
};

