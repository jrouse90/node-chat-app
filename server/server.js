const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io")

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app)
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log("New user connected");

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
        io.emit("newMessage", {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        })
    })

    socket.on('disconnect', (socket) => {
        console.log("User disconected from server");
    });
});




app.use(express.static(publicPath));

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

