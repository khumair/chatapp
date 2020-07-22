const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const router = require('./router');
// const { Socket } = require('socket.io-client');
const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('we have a new connection !!!');
    socket.on('join', ({ name, room }, callback) => {
        console.log(name, room);


    });
    socket.on('disconnect', () => {
        console.log('User just left !!!');
    })
});
app.use(router);
server.listen(PORT, () => console.log(`Server has start on port ${PORT}`));
