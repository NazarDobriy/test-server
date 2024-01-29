"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ws = require("ws");
var PORT = 8080;
var server = new ws.WebSocketServer({ port: PORT }, function () {
    console.log("Server started on port ".concat(PORT));
});
server.on("connection", function () {
    console.log('Connected!!!');
});
