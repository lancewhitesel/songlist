import {
  FETCH_MY_SONGS,
  SEARCH_MY_SONGS,
  SAVE_TO_MY_LIST,
  REMOVE_FROM_MY_LIST,
} from '../actions';

let songsCache = [];
export default function (state = [], action) {
  if (action.type === SEARCH_MY_SONGS) {
    const term = action.payload && action.payload.toLowerCase();
    return Object.values(songsCache).filter((s) => {
      if (!term || s.title.toLowerCase().indexOf(term) > -1) {
        return true;
      }
      return false;
    });
  } else if (action.type === FETCH_MY_SONGS) {
    songsCache = (Object.values(action.payload) || []).reduce((cache, s) => {
      const { id } = s;
      if (id) {
        cache[s.videoId] = { // eslint-disable-line no-param-reassign
          id,
          title: s.title,
          description: s.description,
          videoId: s.videoId,
          imageUrl: s.imageUrl,
        };
      }

      return cache;
    }, {});

    return songsCache;
  } else if (action.type === SAVE_TO_MY_LIST) {
    const song = action.payload;
    songsCache[song.videoId] = {
      id: song.id,
      title: song.title,
      description: song.description,
      videoId: song.videoId,
      imageUrl: song.imageUrl,
    };

    return Object.assign({}, songsCache);
  } else if (action.type === REMOVE_FROM_MY_LIST) {
    const deletedId = action.payload;
    const deletedSong = Object.values(songsCache).filter(s => s.id === deletedId)[0];
    delete songsCache[deletedSong.videoId];

    return Object.assign({}, songsCache);
  }

  return state;
}
