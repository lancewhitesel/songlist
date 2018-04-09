import { Song } from '../../database';
import pubsub from './pubsub';

const SONG_ADDED = 'songAdded';
const SONG_REMOVED = 'songRemoved';

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
        pubsub.publish(SONG_ADDED, { songAdded: data });
        return data;
      });
    },
    removeSong(root, { id }) {
      return Song.findOneAndRemove({ _id: id }).then((data) => {
        pubsub.publish(SONG_REMOVED, { songRemoved: data });
        return data;
      });
    },
  },
  Subscription: {
    songAdded: {
      subscribe: () => pubsub.subscribe(SONG_ADDED),
    },
    songRemoved: {
      subscribe: () => pubsub.subscribe(SONG_REMOVED),
    },
  },
};
