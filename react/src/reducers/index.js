import { combineReducers } from 'redux';
import songListReducer from './songListReducer';
import activeSongReducer from './activeSongReducer';
import youtubeSearchReducer from './youtubeSearchReducer';

// combineReducers essentially constructs our application state by
//  merging the result of all reducers.
const rootReducer = combineReducers({
  songsToo: songListReducer,
  selectedSong: activeSongReducer,
  songs: youtubeSearchReducer,
  // youtubeSearchResults: youtubeSearchReducer,
});

export default rootReducer;
