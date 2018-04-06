import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import selectedMySongReducer from './selectedMySongReducer';
import selectedYoutubeSongReducer from './selectedYoutubeSongReducer';
import mySongsReducer from './mySongsReducer';
import youtubeSearchReducer from './youtubeSearchReducer';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import myPlaylistsReducer from './myPlaylistsReducer';
import selectedPlaylistReducer from './selectedPlaylistReducer';

// combineReducers essentially constructs our application state by
//  merging the result of all reducers.
const rootReducer = combineReducers({
  user: loginReducer,
  signup: signupReducer,
  selectedSong: selectedMySongReducer,
  selectedYoutubeSong: selectedYoutubeSongReducer,
  youtubeSongs: youtubeSearchReducer,
  mySongs: mySongsReducer,
  playlists: myPlaylistsReducer,
  selectedPlaylist: selectedPlaylistReducer,
  form: formReducer,
});

export default rootReducer;
