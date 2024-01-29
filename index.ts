import * as ws from "ws";

const PORT = 8080;

const server = new ws.WebSocketServer({ port: PORT }, () => {
  console.log(`Server started on port ${PORT}`);
});

server.on("connection", () => {
  console.log('Connected!!!');
});
