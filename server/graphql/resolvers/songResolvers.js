import { Song } from '../../database';

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

      return song.save();
    },
    deleteSong(root, { id }) {
      return Song.findOneAndRemove({ _id: id });
    },
  },
};
