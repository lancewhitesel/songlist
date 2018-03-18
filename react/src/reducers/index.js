import { combineReducers } from 'redux';
import songListReducer from './songListReducer';
import activeSongReducer from './activeSongReducer';

// combineReducers essentially constructs our application state by
//  merging the result of all reducers.
const rootReducer = combineReducers({
  songs: songListReducer,
  selectedSong: activeSongReducer,
});

export default rootReducer;
