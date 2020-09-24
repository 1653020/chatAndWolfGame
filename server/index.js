const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const router = require('./router')

const { addUser, removeUser, getUser, getAllUser, getUserById } = require('./users')

const app = express();
const server = http.createServer(app)
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('We have a new connection!!')

    socket.on('join', (name, callback) => {
        const { error, user } = addUser({ id: socket.id, name })
        console.log(`${name} had Join!`);
        console.log(getAllUser())
        if (error) return callback(error);

        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room` })
        socket.broadcast.to('GHOLX').emit('message', { user: 'admin', text: `${user.name}, has joined!` })
        socket.join('GHOLX')

        const users = getAllUser()
        io.to('GHOLX').emit('getAllUser', { user: users })
        callback()
    })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id)
        if (user) {
            io.to('GHOLX').emit('message', { user: user.name, text: message, color: user.color })
        }
    })

    socket.on('disconnect', () => {
        const user = getUser(socket.id)
        removeUser(socket.id)
        const users = getAllUser()
        if (user) {
            socket.broadcast.to('GHOLX').emit('message', { user: 'admin', text: `${user.name}, had left!` })
            io.to('GHOLX').emit('updateUser', { user: users })
        }
    })

    socket.on('disconnected', (userName) => {
        removeUser(socket.id)
        const users = getAllUser()
        socket.broadcast.to('GHOLX').emit('message', { user: 'admin', text: `${userName}, had left!` })
        io.to('GHOLX').emit('updateUser', { user: users })
    })
})

app.use(router)

server.listen(PORT, () => {
    console.log(`Server has been start on Port: ${PORT}`)
})