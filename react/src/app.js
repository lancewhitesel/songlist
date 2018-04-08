import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import SongListApp from './containers/SongListApp';
import songListStore from './store';
import { setReduxStore } from './data';

// Keeping this around temporarily until I really grasp JSS
require('./components/global.scss');

// Redux
const store = songListStore();

// Server Side Data Interface
setReduxStore(store);

ReactDOM.render(
  <Provider store={store}>
    <SongListApp />
  </Provider>,
  document.getElementById('root'),
);
