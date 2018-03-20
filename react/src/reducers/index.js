import { combineReducers } from 'redux';
import selectedMySongReducer from './selectedMySongReducer';
import selectedYoutubeSongReducer from './selectedYoutubeSongReducer';
import mySongsReducer from './mySongsReducer';
import youtubeSearchReducer from './youtubeSearchReducer';

// combineReducers essentially constructs our application state by
//  merging the result of all reducers.
const rootReducer = combineReducers({
  selectedSong: selectedMySongReducer,
  selectedYoutubeSong: selectedYoutubeSongReducer,
  youtubeSongs: youtubeSearchReducer,
  mySongs: mySongsReducer,
});

export default rootReducer;
