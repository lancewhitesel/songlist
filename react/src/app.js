import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import SongListApp from './components/SongListApp';
import songListStore from './store/songListStore';

// Keeping this around temporarily until I really grasp JSS
require('./components/global.scss');

const target = document.getElementById('root');

// This is for server-side rendering...
const store = songListStore(window.__INITIAL_STATE__); // eslint-disable-line no-underscore-dangle
export default store;

const render = () => (
  <Provider store={store}>
    <SongListApp />
  </Provider>
);

const node = render();

ReactDOM.render(node, target);
