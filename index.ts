const express = require('express');
const http = require('http');
const ws = require('ws');

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 8080;

const webSocketServer = new ws.WebSocketServer({ port: PORT }, () => { 
  console.log(`Server started on port ${PORT}`); 
}); 

app.get('/', (req, res) => {
  res.send('Hello, world!\n');
});

webSocketServer.on('connection', socket => {
  socket.on('message', message => {
    socket.send(fizzBuzz(parseInt(message)));
  });
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

function fizzBuzz(n) {
  if (n % 15 === 0) {
    return 'FizzBuzz';
  } else if (n % 3 === 0) {
    return 'Fizz';
  } else if (n % 5 === 0) {
    return 'Buzz';
  } else {
    return `${n}`;
  }
}