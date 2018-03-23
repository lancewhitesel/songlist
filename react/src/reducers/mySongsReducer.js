import { FETCH_MY_SONGS, SEARCH_MY_SONGS, SAVE_TO_MY_LIST } from '../actions';

/*
const fakeData = [
  { id: '1', title: 'Who You Say I Am' },
  { id: '2', title: 'Our God' },
  { id: '3', title: 'In Christ Alone' },
  { id: '4', title: 'Desert Song' },
  { id: '5', title: 'Cornerstone' },
];
*/

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
    /*
    songsCache = ((action.payload && action.payload.data) || []).map((s) => {
      const { _id, ...noUnderscoreId } = s; // eslint-disable-line no-underscore-dangle
      return {
        id: s._id, // eslint-disable-line no-underscore-dangle
        ...noUnderscoreId,
      };
    });
    */
    songsCache = (Object.values(action.payload) || []).map(s => ({
      id: s.id,
      title: s.title,
      description: s.description,
    })).filter(sToo => sToo.id);

    return songsCache;
  } else if (action.type === SAVE_TO_MY_LIST) {
    // console.debug('after save to my list! ', action.payload);
  }

  return state;
}
