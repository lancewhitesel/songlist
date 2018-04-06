import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import mongo from 'mongodb';
import path from 'path';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import schema from './graphql/schema';

const { MongoClient } = mongo;

const server = express();

// CORS - 3rd party middleware
server.use(cors());

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// This is code that I was using for the angular version of the app.
// app.use(express.static('angularjs'));

// This is code that is used to support the React version of the server.
server.use(express.static('react/dist'));

// This is code that I was using for the angular version of the app.
server.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

server.listen(process.env.PORT || 3300, () => {
  console.log('Listening on port 3300...');
});

export default server;
