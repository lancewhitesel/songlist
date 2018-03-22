import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import mongo from 'mongodb';
import path from 'path';
import falcor from 'falcor';
import falcorExpress from 'falcor-express';
import falcorRouter from 'falcor-router';
import routes from './routes.js';

const { MongoClient } = mongo;

const app = express();
app.server = http.createServer(app);

// CORS - 3rd party middleware
app.use(cors());

// This is required by falcor-express middleware
//  to work correctly with falcor-browser 
app.use(bodyParser.json({extended: false}));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/model.json', falcorExpress.dataSourceRoute((req, res) => {
  return new falcorRouter([].concat(routes(req, res)));
}));

// This is code that I was using for the angular version of the app.
// app.use(express.static('angularjs'));
// This is code that is used to support the React version of the server.
app.use(express.static('react/dist'));

// This is code that I was using for the angular version of the app.
app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

app.post('/song', (req, res) => {
  console.log('song post data: ', req);
  console.log('song post data: ', req.body);
  console.log('song post title: ', req.body.title);

  db.collection(SONGS_COLLECTION).save(req.body, (err, result) => {
    if (err) 
      return console.log(err);

    console.log('saved to database: ', req.body);
    db.collection(SONGS_COLLECTION).find().toArray(function(err, results) {
      res.send(results);
    })
  })
});

app.get('/list', (req, res) => {
  console.log('attempting to get list...');
  db.collection(SONGS_COLLECTION).find().toArray(function(err, results) {
    res.send(results);
  })
});

/*
 This code was from the original version of the server and supporting the angular client.
const dbUrl = 'mongodb://lwadmin:lwadmin@ds137826.mlab.com:37826/lancewhitesel';
MongoClient.connect(dbUrl, (err, database) => {
  // ... start the server
  db = database.db('lancewhitesel');
  // for ( var x in db ) {
    // console.log(x + ': ' + db[x]);
  // }
  app.listen(process.env.PORT || 3300, () => {
    console.log('Listening on port 3300...');
  });
});
*/

app.listen(process.env.PORT || 3300, () => {
  console.log('Listening on port 3300...');
});

export default app;
