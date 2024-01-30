const ws = require('ws');

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

const PORT = process.env.PORT || 8080;

const server = new ws.WebSocketServer({ port: PORT }, () => { 
  console.log(`Server started on port ${PORT}`); 
});

server.on('connection', socket => {
  socket.on('message', message => {
    socket.send(fizzBuzz(parseInt(message)));
  });
});
