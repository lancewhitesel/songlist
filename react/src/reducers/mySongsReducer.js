import { FETCH_MY_SONGS, SEARCH_MY_SONGS, SAVE_TO_MY_LIST } from '../actions';

let songsCache = [];
export default function (state = [], action) {
  if (action.type === SEARCH_MY_SONGS) {
    const term = action.payload && action.payload.toLowerCase();
    return songsCache.filter((d) => {
      if (!term || d.title.toLowerCase().indexOf(term) > -1) {
        return true;
      }
      return false;
    });
  } else if (action.type === FETCH_MY_SONGS) {
    songsCache = (Object.values(action.payload) || []).map(s => ({
      id: s._id, // eslint-disable-line no-underscore-dangle
      title: s.title,
      description: s.description,
      videoId: s.videoId,
      imageUrl: s.imageUrl,
    })).filter(sToo => sToo.id);

    return songsCache;
  } else if (action.type === SAVE_TO_MY_LIST) {
    // console.debug('after save to my list! ', action.payload);
  }

  return state;
}
