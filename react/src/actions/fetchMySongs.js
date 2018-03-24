import { FETCH_MY_SONGS } from '.';
import falcorModel from '../model/falcorModel';

async function fetchSongData() {
  const numberSongs = await falcorModel.getValue('songs.length').then(length => length);
  let songs = [];
  if (numberSongs > 0) {
    songs = await falcorModel.get(['songs',
      { from: 0, to: numberSongs - 1 },
      ['_id', 'title', 'description', 'imageUrl', 'videoId']])
      .then(songResponse => songResponse.json.songs);
  }

  return songs;
}

export default () => ({
  type: FETCH_MY_SONGS,
  payload: fetchSongData(),
});
