import falcor from 'falcor';
import FalcorDataSource from 'falcor-http-datasource';
import socket from 'socket.io-client';

import store from '../app';
import fetchMySongs from '../actions/fetchMySongs';

const io = socket('ws://localhost:8989');
io.emit('test', 'Hello Lance!');

const { token, username, role } = localStorage;

let headers = {};
if (token && username && role) {
  headers = {
    token,
    username,
    role,
  };
}

const model = new falcor.Model({
  source: new FalcorDataSource('/falcor/model.json', {
    headers,
  }),
});

io.on('falcor', (results) => {
  console.log('client side recieved update: ', results);
  model.withoutDataSource().set(...results);
  const paths = results.map((r) => {
    console.log('r: ', r);
    console.log('r.path: ', r.path);
    return r.path;
  });
  console.log('paths: ', paths);
  // model.invalidate(...paths);
  store.dispatch(fetchMySongs());
});

export default model;
