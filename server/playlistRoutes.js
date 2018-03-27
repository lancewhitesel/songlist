import { Playlist } from './databaseConfig';
import jsonGraph from 'falcor-json-graph';
import jwt from 'jsonwebtoken';
import jwtSecret from './jwtSecret';

let $atom = jsonGraph.atom;
let $ref = jsonGraph.ref;

export default [
  {
    route: 'playlists.length',
    get: () => {
      return Playlist.count({}, (err, count) => count).then(
        playlistsCountInDB => ({
          path: ['playlists', 'length'],
          value: playlistsCountInDB,
        }));
    }
  },
  {
    route: 'playlistsById[{keys}]["_id","title","description"]',
    get: (pathSet) => {
      const playlistIDs = pathSet[1];
      return Playlist.find({
        '_id':
          { $in: playlistIDs }
      }, (err, playlistDocs) => {
        return playlistDocs;
      }).then((playlistsArrayFromDB) => {
        let results = [];

        playlistsArrayFromDB.map((playlist) => {
          let playlistResObj = playlist.toObject();
          let currentIdString = String(playlistResObj['_id']);

          results.push({
            path: ['playlistsById', currentIdString],
            value: playlistResObj
          });
        });

        return results;
      });
    }
  },
  {
    route: 'playlists[{integers}]',
    get: (pathSet) => {
      console.log('playlists!');
      const playlistsIndex = pathSet[1];
      console.log('playlistsIndex: ', playlistsIndex);
      return Playlist.find({}, '_id', (err, playlistDocs) => playlistDocs).then(
        (playlistsArrayFromDB) => {
          const results = [];
          playlistsIndex.forEach((index) => {
      console.log('playlistsArrayFromDB: ', playlistsArrayFromDB);
            const s = playlistsArrayFromDB[index];
            const currentID = String(playlistsArrayFromDB[index]['_id']);
            const playlistRef = $ref(['playlistsById', currentID]);
            const falcorPlaylistResult = {
              path: ['playlists', index],
              value: playlistRef,
            };
            results.push(falcorPlaylistResult);
          });

          return results;
        });
    }
  },
  {
    route: 'playlists.add', 
    call: (callPath, args) => { 
      const newListObj = args[0]; 
      var playlist = new Playlist(newListObj); 

      return playlist.save().then ((data) => { 
        return Playlist.count({}, (err, count) => { 
        }).then((count) => { 
          return { count, data }; 
        }); 
      }).then ((res) => { 
        const newListDetail = res.data.toObject(); 
        const newListID = String(newListDetail['_id']); 
        const newListRef = $ref(['playlistsById', newListID]); 
        const results = [{ 
          path: ['playlists', res.count-1], 
          value: newListRef 
        }, { 
          path: ['playlists', 'newListID'], 
          value: newListID 
        }, { 
          path: ['playlists', 'length'], 
          value: res.count 
        }]; 

        return results; 
      }).catch((reason) => {
        console.error(reason)
        return reason;
      }); 
    } 
  },
];