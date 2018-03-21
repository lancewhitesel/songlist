import mongoose, { Schema } from 'mongoose';

//'mongodb://lwadmin:lwadmin@ds137826.mlab.com:37826/lancewhitesel');
const config = {
  hostname: process.env.MONGO_HOSTNAME || 'lwadmin:lwadmin@ds137826.mlab.com',
  port: process.env.MONGO_PORT || 37826,
  env: process.env.MONGO_ENV || 'lancewhitesel',
};

/* TODO - change to vvvvv when I push this to producation
const conf = {
  hostname: process.env.MONGO_HOSTNAME || 'localhost',
  port: process.env.MONGO_PORT || 27017,
  env: process.env.MONGO_ENV || 'local',
};
*/

mongoose.connect(`mongodb://${config.hostname}:${config.port}/${config.env}`);
// mongoose.connect('mongodb://lwadmin:lwadmin@ds137826.mlab.com:37826/lancewhitesel');

const SONGS_COLLECTION = 'songs';
const songSchema = new Schema({
  title: String,
  artist: String,
  description: String,
  videoId: String,
  imageUrl: String,
}, {
  collection: SONGS_COLLECTION,
});
export const Song = mongoose.model('Song', songSchema);


const USERS_COLLECTION = 'users';
const userSchema = new Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  role: String,
  verified: String,
  imageUrl: String,
}, {
  collection: USERS_COLLECTION
});
export const User = mongoose.model('User', userSchema);
