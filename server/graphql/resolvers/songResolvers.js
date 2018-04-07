import { Song } from '../../database';
import pubsub from './pubsub';

const SONG_ADDED = 'songAdded';

export default {
  Query: {
    songList: () => Song.find(),
    song: (root, { id }) => {
      return Song.findOne({ _id: id });
    },
  },
  Mutation: {
    addSong(root, { title, artist, description, videoId, imageUrl }) {
      const song = new Song({
        title,
        artist,
        description,
        videoId,
        imageUrl,
      });

      return song.save().then((data) => {
        // console.log('publishing data...', data);
        pubsub.publish(SONG_ADDED, { songAdded: data });
        return data;
      });
    },
    deleteSong(root, { id }) {
      return Song.findOneAndRemove({ _id: id });
    },
  },
  Subscription: {
    songAdded: {
      subscribe: () => pubsub.subscribe(SONG_ADDED),
    },
  },
};
