import mongoose from 'mongoose';

//'mongodb://lwadmin:lwadmin@ds137826.mlab.com:37826/lancewhitesel');
const config = {
  hostname: process.env.MONGO_HOSTNAME || 'lwadmin:lwadmin@ds137826.mlab.com',
  port: process.env.MONGO_PORT || 37826,
  env: process.env.MONGO_ENV || 'lancewhitesel',
};

/* TODO - change to vvvvv when I push this to producation
const conf = {
  hostname: process.env.MONGO_HOSTNAME || 'localhost',
  port: process.env.MONGO_PORT || 27017,
  env: process.env.MONGO_ENV || 'local',
};
*/

console.log('Connecting to mongo...');
// mongoose.connect(`mongodb://${config.hostname}:${config.port}/${config.env}`);
// mongoose.connect('mongodb://lwadmin:lwadmin@ds137826.mlab.com:37826/lancewhitesel');
mongoose.connect('mongodb://localhost/songList');
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('connection to db success!');
});

export default connection;