const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('angularjs'));

var db;

app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err);

    console.log('saved to database: ', req.body);
    res.redirect('/')
  })
});

app.get('/list', (req, res) => {
  console.log('attempting to get list...');
  db.collection('songs').find().toArray(function(err, results) {
    res.send(results);
  })
});

const dbUrl = 'mongodb://lwadmin:lwadmin@ds137826.mlab.com:37826/lancewhitesel';
MongoClient.connect(dbUrl, (err, database) => {
  // ... start the server
  db = database.db('lancewhitesel');
  // for ( var x in db ) {
    // console.log(x + ': ' + db[x]);
  // }
  app.listen('3300', () => {
    console.log('Listening on port 3300...');
  });
});
