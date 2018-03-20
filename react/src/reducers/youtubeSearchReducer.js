import { SEARCH_YOUTUBE } from '../actions';

export default function (state = [], action) {
  if (action.type === SEARCH_YOUTUBE) {
    return ((action.payload.data && action.payload.data.items) || []).map(item => ({
      id: item.etag,
      title: item.snippet.title,
      description: item.snippet.description,
      videoId: item.id.videoId,
      imageUrl: item.snippet.thumbnails.high.url,
    }));
  }

  return state;
}
