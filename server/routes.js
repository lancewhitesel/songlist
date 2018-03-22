import { Song } from './databaseConfig';
import sessionRoutes from './routesSession';
import jsonGraph from 'falcor-json-graph';
import jwt from 'jsonwebtoken';
import jwtSecret from './jwtSecret';

let $atom = jsonGraph.atom;
let $ref = jsonGraph.ref;

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
    route: 'songsById[{keys}]["id","title","description"]',
    get: (pathSet) => {
      console.log('songs by id! ', pathSet);
      const songIDs = pathSet[1];
      return Song.find({
        'id':
          { $in: songIDs }
      }, (err, songDocs) => {
        return songDocs;
      }).then((songsArrayFromDB) => {
      console.log('songs by id! array: ', songsArrayFromDB);
        let results = [];

        songsArrayFromDB.map((song) => {
          let songResObj = song.toObject();
          let currentIdString = String(songResObj['id']);
      console.log('songs by id! currentIdStr: ', currentIdString);

          results.push({
            path: ['songsById', currentIdString],
            value: songResObj
          });
        });

        return results;
      });
    }
  },
  {
    route: 'songs[{integers}]',
    get: (pathSet) => {
      const songsIndex = pathSet[1];
      return Song.find({}, 'id', (err, songDocs) => songDocs).then(
        (songsArrayFromDB) => {
          console.log('songs from array: ', songsArrayFromDB);
          const results = [];
          songsIndex.forEach((index) => {
            const s = songsArrayFromDB[index];
            console.log('s: ', s);
            console.log('s.id: ', s['id']);
            const currentID = String(songsArrayFromDB[index]['id']);
            console.log('currrent id: ', currentID);
            const songRef = $ref(['songsById', currentID]);
            const falcorSongResult = {
              path: ['songs', index],
              value: songRef,
            };
            console.log('song ref: ', songRef);
            results.push(falcorSongResult);
          });

          return results;
        });
    }
  },
  {
    route: 'songs.add', 
    call: (callPath, args) => { 
      const newSongObj = args[0]; 
      var song = new Song(newSongObj); 

      return song.save().then ((data) => { 
        return Song.count({}, (err, count) => { 
        }).then((count) => { 
          return { count, data }; 
        }); 
      }).then ((res) => { 
        const newSongDetail = res.data.toObject(); 
        const newSongID = String(newSongDetail['id']); 
        const newSongRef = $ref(['songsById', newSongID]); 
        const results = [{ 
          path: ['songs', res.count-1], 
          value: newSongRef 
        }, { 
          path: ['songs', 'newSongID'], 
          value: newSongID 
        }, { 
          path: ['songs', 'length'], 
          value: res.count 
        }]; 

        return results; 
      }).catch((reason) => {
        console.error(reason)
        return err; 
      }); 
    } 
  }];

export default (req, res) => {
  const { token, role, username } = req.headers;
  const userDetailsToHash = username + role;
  const authSignToken = jwt.sign(userDetailsToHash, jwtSecret);
  const isAuthorized = authSignToken === token;
  const sessionObject = { isAuthorized, role, username };

  console.info(`The ${username} is authorized === `, isAuthorized);

  return SongListRoutes;
};