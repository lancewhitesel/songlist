import mongoose, { Schema } from 'mongoose';

import connection from './connection';

import playlistSchema from './playlistSchema';
import songSchema from './songSchema';
import userSchema from './userSchema';

const Playlist = mongoose.model('Playlist', playlistSchema);
const Song = mongoose.model('Song', songSchema);
const User = mongoose.model('User', userSchema);

export {
  Playlist,
  Song,
  User,
};
