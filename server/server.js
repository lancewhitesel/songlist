import os from 'os';
import { createServer } from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import path from 'path';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';

import schema from './graphql/schema';

const PORT = process.env.PORT || 3300;

const server = express();

// This is code that I was using for the angular version of the app.
// app.use(express.static('angularjs'));

// This is code that is used to support the React version of the server.
server.use(express.static('react/dist'));

server.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

// CORS - 3rd party middleware
server.use(cors());

server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionsEndpoint: `ws://${os.hostname()}:${PORT}/subscriptions`,
}));

// Websocket server
const ws = createServer(server);

ws.listen(PORT, () => {
  console.log(`SongList server now listening on http://${os.hostname()}:${PORT}`);

  // GraphQL web socket for handling subscriptions
  new SubscriptionServer({
    execute,
    subscribe,
    schema,
  }, {
    server: ws,
    path: '/subscriptions',
  });
});
