// server.js
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

const PORT = 3000;

// Servir archivos estáticos (como index.html)
app.use(express.static('public'));

// WebSocket para señalización WebRTC
io.on('connection', socket => {
  console.log('Usuario conectado');

  socket.on('offer', data => {
    socket.broadcast.emit('offer', data);
  });

  socket.on('answer', data => {
    socket.broadcast.emit('answer', data);
  });

  socket.on('candidate', data => {
    socket.broadcast.emit('candidate', data);
  });

  socket.on('disconnect', () => {
    console.log('Usuario desconectado');
  });
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://<IP_DE_TU_PC>:${PORT}`);
});
