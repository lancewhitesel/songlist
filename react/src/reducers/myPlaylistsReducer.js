import {
  FETCH_MY_PLAYLISTS,
  SEARCH_MY_PLAYLISTS,
  CREATE_PLAYLIST,
} from '../actions';

let playlistsCache = [];
export default function (state = [], action) {
  if (action.type === SEARCH_MY_PLAYLISTS) {
    const term = action.payload && action.payload.toLowerCase();
    return Object.values(playlistsCache).filter((s) => {
      if (!term || s.title.toLowerCase().indexOf(term) > -1) {
        return true;
      }
      return false;
    });
  } else if (action.type === FETCH_MY_PLAYLISTS) {
    playlistsCache = (Object.values(action.payload) || []).reduce((cache, s) => {
      const id = s._id; // eslint-disable-line no-underscore-dangle
      if (id) {
        cache.push({
          id,
          title: s.title,
          description: s.description,
        });
        /*
        cache[id] = { // eslint-disable-line no-param-reassign
          title: s.title,
          description: s.description,
        };
        */
      }

      return cache;
    }, []);
    /*
    // playlistsCache = action.payload.map(l => l);
    playlistsCache = [
      {
        id: '1',
        title: 'Playlist 1',
        description: 'Playlist 1 Desc',
      },
      {
        id: '2',
        title: 'Playlist 2',
        description: 'Playlist 2 Desc',
      },
      {
        id: '3',
        title: 'Playlist 3',
        description: 'Playlist 3 Desc - this is a really long one...',
      },
    ];
    */

    return playlistsCache;
  } else if (action.type === CREATE_PLAYLIST) {
    const list = action.payload;
    playlistsCache.push(list);

    return Array.concat([], playlistsCache);
  }

  return state;
}
