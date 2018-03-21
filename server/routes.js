import { Song } from './databaseConfig';
import sessionRoutes from './routesSession';

const SongListRoutes = [
  ...sessionRoutes,
{
  route: 'songs.length',
  get: () => {
    return Song.count({}, (err, count) => count).then(
      songsCountInDB => ({
        path: ['songs', 'length'],
        value: songsCountInDB,
      }));
  }
},
{
  route: 'songs[{integers}]["id","title","description"]',
  get: (pathSet) => {
    const songsIndex = pathSet[1];
    /*
    const songsArrayFromDB = [{
      'id': '1', 'title': 'Backend - Who You Say I Am', 'description': 'Back', artist: '',
    }, {
      'id': '2', 'title': 'Backend - Our God', 'description': '', 'artist': '',
    }, {
      'id': '3', 'title': 'In Christ Alone', 'description': '', 'artist': '',
    }, {
      'id': '4', 'title': 'Desert Song', 'description': '', 'artist': '',
    }, {
      'id': '5', 'title': 'Cornerstone', 'description': '', 'artist': '',
    }];

    let results = [];
    songsIndex.forEach((index) => {
      const song = songsArrayFromDB[index];
      const falcorSongResult = {
        path: ['songs', index],
        value: song
      };
      results.push(falcorSongResult);
    });

    return results;
    */
    return Song.find({}, (err, songDocs) => songDocs).then(
      (songsArrayFromDB) => {
        let results = [];
        songsIndex.forEach((index) => {
          const song = songsArrayFromDB[index].toObject();
          const falcorSongResult = {
            path: ['songs', index],
            value: song
          };
          results.push(falcorSongResult);
        });

        return results;
      });
  }
}];

export default SongListRoutes;