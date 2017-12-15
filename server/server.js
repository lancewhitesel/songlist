const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

var db;

app.get('/', (req, res) => {
  res.sendFile(path.resolve('angularjs/index.html'));
});

app.post('/quotes', (req, res) => {
  console.log('db: ', db.collection);
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err);

    console.log('saved to database: ', req.body);
    res.redirect('/')
  })
});

// const dbUrl = 'mongodb://lwadmin:lwadmin@ds137826.mlab.com:37826/lancewhitesel';
const dbUrl = 'mongodb://lwadmin:lwadmin@ds137826.mlab.com:37826/lancewhitesel';
// const mongoclient = new MongoClient(new Server("localhost", 27017), {native_parser: true});
MongoClient.connect(dbUrl, (err, database) => {
  // ... start the server
  db = database.db('lancewhitesel');
  // for ( var x in db ) {
    // console.log(x + ': ' + db[x]);
  // }
  db.collection('quotes')
  /*, function(one, two) {
  for ( var x in two ) {
    console.log(x + ': ' + two[x]);
  }
  });
  */
  app.listen('3300', () => {
    console.log('Listening on port 3300...');
  });
});
