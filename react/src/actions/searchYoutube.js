import axios from 'axios';

import { SEARCH_YOUTUBE } from '.';

const API_KEY = 'AIzaSyCogZgjBRNJ8jVLcZNdlLT077uukEmEH3Q';

const getParams = term => ({
  part: 'snippet',
  key: API_KEY,
  q: term,
  type: 'video',
  maxResults: 7,
});

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

export default (term) => {
  const search = axios.get(ROOT_URL, { params: getParams(term) });

  return {
    type: SEARCH_YOUTUBE,
    payload: search,
  };
};
