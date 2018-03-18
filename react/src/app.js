import React from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import SongListApp from './components/SongListApp';

// Keeping this around temporarily until I really grasp JSS
require('./components/global.scss');

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

function render() {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <SongListApp />
    </Provider>
  );
}

ReactDOM.render(render(), document.getElementById('root'));
