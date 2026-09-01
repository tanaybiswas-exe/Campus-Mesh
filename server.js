const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

const activeUsers = {};

io.on('connection', (socket) => {
    console.log('Device connected:', socket.id);

    socket.on('set-name', (userData) => {
        activeUsers[socket.id] = userData;
        io.emit('update-users', activeUsers);
    });

    socket.on('join-room', (roomCode) => {
        socket.join(roomCode);
        console.log(`Socket ${socket.id} joined room: ${roomCode}`);
        socket.to(roomCode).emit('peer-joined'); 
    });

    socket.on('request-connection', (targetId) => {
        if (activeUsers[socket.id]) {
            socket.to(targetId).emit('incoming-request', {
                fromId: socket.id,
                fromName: activeUsers[socket.id].name,
                fromAvatar: activeUsers[socket.id].avatar
            });
        }
    });

    socket.on('accept-connection', (requesterId) => {
        const roomCode = `room_${Date.now()}`;
        socket.join(roomCode);
        
        const requesterSocket = io.sockets.sockets.get(requesterId);
        if (requesterSocket) {
            requesterSocket.join(roomCode);
            socket.emit('room-joined', roomCode);
            requesterSocket.emit('room-joined-initiate', roomCode);
        }
    });

    socket.on('offer', (data) => socket.to(data.room).emit('offer', data.offer));
    socket.on('answer', (data) => socket.to(data.room).emit('answer', data.answer));
    socket.on('ice-candidate', (data) => socket.to(data.room).emit('ice-candidate', data.candidate));

    socket.on('disconnect', () => {
        delete activeUsers[socket.id];
        io.emit('update-users', activeUsers);
        console.log('Device disconnected:', socket.id);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
});