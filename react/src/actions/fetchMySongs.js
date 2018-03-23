import { FETCH_MY_SONGS } from '.';
import falcorModel from '../model/falcorModel';

async function fetchSongData() {
  const numberSongs = await falcorModel.getValue('songs.length').then(length => length);
  const songs = await falcorModel.get(['songs',
    { from: 0, to: numberSongs - 1 },
    ['id', 'title', 'description']])
    .then(songResponse => songResponse.json.songs);

  return songs;
}

export default function fetchMySongs() {
  return {
    type: FETCH_MY_SONGS,
    payload: fetchSongData(),
  };
}
