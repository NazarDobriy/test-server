import * as ws from "ws";

const PORT = process.env.PORT ? Number(process.env.PORT) : 8080;

const server = new ws.WebSocketServer({ port: PORT }, () => {
  console.log(`Server started on port ${PORT}`);
});

server.on("connection", () => {
  console.log('Connected!!!');
});
