import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers';

export default (initialState, debug = false) => {
  const middleware = applyMiddleware(ReduxPromise, thunk);
  const createStoreWithMiddleware = compose(middleware);

  return createStoreWithMiddleware(createStore)(rootReducer, initialState);
};
