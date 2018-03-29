import socketApp from 'express';
import http from 'http';
import socket from 'socket.io';

const socketServer = http.Server(socketApp);
const io = socket(socketServer);

socketServer.listen(8989, () => {
  console.log('Socket server listening on 8989...');
});

io.on('connection', socket => {
  console.log('made socket connection in songlist');
  socket.on('test', (msg) => {
    console.log('server received message: ', msg);
  });
});

export default io;