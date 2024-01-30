const http = require('http');
const ws = require('ws');

function fizzBuzz(n: number): string {
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

const httpServer = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!\n');
});

const webSocketServer = new ws.Server({ server: httpServer });

webSocketServer.on('connection', socket => {
  socket.on('message', message => {
    socket.send(fizzBuzz(parseInt(message)));
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});