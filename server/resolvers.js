import { Song, Playlist } from './databaseConfig';

const resolvers = {
  Query: {
    songList: () => Song.find(),
    song: (root, { id }) => {
      return Song.findOne({ _id: id });
    },
    playlistList: () => Playlist.find().populate('songs'),
    playlist: (root, { id }) => {
      return Playlist.findOne({ id }).populate('songs');
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
    addPlaylist(root, { title, description, songs }) {
      const playlist = new Playlist({
        title,
        description,
        songs,
      });

      return playlist.save().then(({ _id }) => {
        return Playlist.findOne({ _id }).populate('songs');
      });
    },
  },
};

export default resolvers;
