import mongoose, { Schema } from 'mongoose';
const ObjectId = Schema.Types.ObjectId;

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

console.log('Connecting to mongo...');
// mongoose.connect(`mongodb://${config.hostname}:${config.port}/${config.env}`);
mongoose.connect('mongodb://localhost/songList');
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('connection to db success!');
});


const SONGS_COLLECTION = 'songs';
const songSchema = new Schema({
  title: String,
  artist: String,
  description: String,
  videoId: String,
  imageUrl: String,
}, {
  collection: SONGS_COLLECTION,
  minimize: false,
});
export const Song = mongoose.model('Song', songSchema);

const PLAYLISTS_COLLECTION = 'playlists';
const playlistSchema = new Schema({
  title: String,
  description: String,
  songs: [{ type: ObjectId, ref: 'Song' }],
}, {
  collection: PLAYLISTS_COLLECTION,
  minimize: false,
});
export const Playlist = mongoose.model('Playlist', playlistSchema);


const USERS_COLLECTION = 'users';
const userSchema = new Schema({
  username: { type: String, index: { unique: true, dropDups: true } },
  password: String,
  firstName: String,
  lastName: String,
  email: { type: String, index: { unique: true, dropDups: true } },
  role: { type: String, default: 'editor' },
  verified: Boolean,
  imageUrl: String,
}, {
  collection: USERS_COLLECTION,
});
export const User = mongoose.model('User', userSchema);
