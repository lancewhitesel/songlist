import { Schema } from 'mongoose';
const ObjectId = Schema.Types.ObjectId;

const PLAYLISTS_COLLECTION = 'playlists';
export default new Schema({
  title: String,
  description: String,
  songs: [{ type: ObjectId, ref: 'Song' }],
}, {
  collection: PLAYLISTS_COLLECTION,
  minimize: false,
});
