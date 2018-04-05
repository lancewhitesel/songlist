import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import SongListApp from './containers/SongListApp';
import songListStore from './store/songListStore';

// Keeping this around temporarily until I really grasp JSS
require('./components/global.scss');

const target = document.getElementById('root');

const store = songListStore();
export default store;

const apolloClient = new ApolloClient({
  dataIdFromObject: o => o.id,
});
export { apolloClient };

const render = () => (
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <SongListApp />
    </Provider>
  </ApolloProvider>
);

const node = render();

ReactDOM.render(node, target);
