import axios from 'axios';


import API_KEY from '../services/keys';

const getParams = term => ({
  part: 'snippet',
  key: API_KEY,
  q: term,
  type: 'video',
  maxResults: 7,
});

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

export const SEARCH_YOUTUBE = 'SEARCH_YOUTUBE';
export default (term) => {
  const search = axios.get(ROOT_URL, { params: getParams(term) });

  return {
    type: SEARCH_YOUTUBE,
    payload: search,
  };
};
