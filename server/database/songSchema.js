import { Schema } from 'mongoose';

const SONGS_COLLECTION = 'songs';
export default new Schema({
  title: String,
  artist: String,
  description: String,
  videoId: String,
  imageUrl: String,
}, {
  collection: SONGS_COLLECTION,
  minimize: false,
});
