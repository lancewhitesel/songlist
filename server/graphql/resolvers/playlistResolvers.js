import { Playlist } from '../../database';

export default {
  Query: {
    playlistList: () => Playlist.find().populate('songs'),
    playlist: (root, { id }) => {
      return Playlist.findOne({ id }).populate('songs');
    },
  },
  Mutation: {
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
  Subscription: {},
};
