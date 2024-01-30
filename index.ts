import * as ws from "ws";
import express from "express";

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

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const httpServer = app.listen(PORT, () => {
  console.log(`HTTP server started on port ${PORT}`);
});

const wsServer = new ws.Server({ server: httpServer });

wsServer.on("connection", socket => {
  console.log("WebSocket client connected");
  socket.on('message', message => {
    socket.send(fizzBuzz(parseInt(message.toString())));
  });
  socket.on('close', () => {
    console.log("WebSocket client disconnected");
  });
});
