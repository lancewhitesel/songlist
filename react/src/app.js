import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import ApolloClient from 'apollo-boost';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { getMainDefinition } from 'apollo-utilities';

import SongListApp from './containers/SongListApp';
import songListStore from './store/songListStore';
import subscriptions from './subscriptions';

// Keeping this around temporarily until I really grasp JSS
require('./components/global.scss');

// Redux
const store = songListStore();
export default store;

// Apollo
// Websockets
const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql',
});

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:3300/subscriptions',
  options: {
    reconnect: true,
  },
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const apolloClient = new ApolloClient({
  dataIdFromObject: o => o.id,
  link,
  cache: new InMemoryCache(),
});
export { apolloClient };

subscriptions(apolloClient);

// Initial render
const render = () => (
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <SongListApp />
    </Provider>
  </ApolloProvider>
);

const node = render();
const target = document.getElementById('root');

ReactDOM.render(node, target);
