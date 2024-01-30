import * as ws from "ws";

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

const server = new ws.WebSocketServer({ port: PORT }, () => {
  console.log(`Server started on port ${PORT}`);
});

server.on("connection", (socket) => {
  console.log('Connected!!!');
  socket.on('message', message => {
    console.log(message);
  });
});
