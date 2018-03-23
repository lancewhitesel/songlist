import { SAVE_TO_MY_LIST } from '.';
import falcorModel from '../model/falcorModel';

async function saveSong(song) {
  const newSong = {
    title: song.title,
    description: song.description,
    videoId: song.videoId,
    imageUrl: song.imageUrl,
  };

  const newSongID = await falcorModel
    .call('songs.add', [newSong])
    .then((result) => {
      falcorModel.getValue(['songs', 'newSongID']).then(songID => songID);
    });

  newSong.id = newSongID;

  return song;
}

export default song => ({
  type: SAVE_TO_MY_LIST,
  payload: saveSong(song),
});
