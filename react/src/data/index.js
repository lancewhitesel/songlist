import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { getMainDefinition } from 'apollo-utilities';

import queries from './queries';
import mutations from './mutations';
import subscriptions from './subscriptions';

// Apollo
// Websockets
const httpLink = new HttpLink({
  uri: '/graphql',
});

const wsLink = new WebSocketLink({
  uri: `ws://${window.location.hostname}:3300/subscriptions`,
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

subscriptions(apolloClient);

function setReduxStore(store) {
  console.log('store! ', store);
}

export {
  apolloClient,
  setReduxStore,
  queries,
  mutations,
};
