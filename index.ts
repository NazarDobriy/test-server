const express = require('express');
const http = require('http');
const ws = require('ws');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 8080;

const webSocketServer = new ws.WebSocketServer({ port: PORT }, () => { 
  console.log(`Server started on port ${PORT}`); 
}); 

app.get('/', (req, res) => {
  res.send('Hello, world!\n');
});

// app.post('/process-array', (req, res) => {
//   const dataArray = req.body;
//   const filePath = 'output.txt';

//   const fileContents = dataArray.join('\n');
//   fs.writeFile(filePath, fileContents, (err) => {
//     if (err) {
//       console.error('Error writing to file:', err);
//       res.status(500).send('Error writing to file');
//     } else {
//       console.log('File saved:', filePath);
//       res.download(filePath, 'output.txt', (err) => {
//         if (err) {
//           console.error('Error sending file:', err);
//           res.status(500).send('Error sending file');
//         } else {
//           console.log('File sent to client');
//           fs.unlink(filePath, (err) => {
//             if (err) {
//               console.error('Error deleting file:', err);
//             } else {
//               console.log('File deleted:', filePath);
//             }
//           });
//         }
//       });
//     }
//   });
// });

webSocketServer.on('connection', socket => {
  socket.on('message', message => {
    socket.send(fizzBuzz(parseInt(message)));
  });
});

app.listen(PORT, () => {
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