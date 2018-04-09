import subscriptions from './songSubscriptions';
import { query as fetchSongs } from '../queries/graphql/fetchSongList';
import { apolloClient } from '../';
import {
  SAVE_TO_MY_LIST,
  REMOVE_FROM_MY_LIST,
} from '../../actions';

export default (client, store) => {
  client.subscribe({
    query: subscriptions.songRemovedSubscription,
  }).subscribe({
    next: ({ data }) => {
      if (!data) {
        return;
      }

      const cache = apolloClient.readQuery({
        query: fetchSongs,
      });
      cache.songList = cache.songList.filter(song => song.id !== data.songRemoved.id);
      apolloClient.writeQuery({
        query: fetchSongs,
        data: cache,
      });

      store.dispatch({
        type: REMOVE_FROM_MY_LIST,
        payload: data.songRemoved.id,
      });
    },
  });

  client.subscribe({
    query: subscriptions.songAddedSubscription,
  }).subscribe({
    next: ({ data }) => {
      if (!data) {
        return;
      }

      const cache = apolloClient.readQuery({
        query: fetchSongs,
      });
      if (cache && cache.songList && data && data.songAdded) {
        cache.songList.push(data.songAdded);
        apolloClient.writeQuery({
          query: fetchSongs,
          data: cache,
        });
      }

      store.dispatch({
        type: SAVE_TO_MY_LIST,
        payload: data.songAdded,
      });
    },
  });
};

