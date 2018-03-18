import YTSearch from 'youtube-api-search';

import API_KEY from '../services/keys';

export default function () {
  console.log('here...');
  return (dispatch) => {
    console.log('searching youtube...');
    YTSearch({ key: API_KEY, term: 'holy' }, (songs) => {
      dispatch({
        type: 'SONGS',
        payload: songs
      });
    });
  };
}
