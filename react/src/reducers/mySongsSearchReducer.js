import { SEARCH_MY_SONGS } from '../actions/searchMySongs';

const fakeData = [
  { id: '1', title: 'Who You Say I Am' },
  { id: '2', title: 'Our God' },
  { id: '3', title: 'In Christ Alone' },
  { id: '4', title: 'Desert Song' },
  { id: '5', title: 'Cornerstone' },
];

export default function (state = [], action) {
  const term = action.payload && action.payload.toLowerCase();

  if (action.type === SEARCH_MY_SONGS) {
    return fakeData.filter((d) => {
      if (!term || d.title.toLowerCase().indexOf(term) > -1) {
        return true;
      }
      return false;
    });
  }

  return state;
}
