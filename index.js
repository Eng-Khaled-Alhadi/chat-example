const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    console.log("1")
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log("1")
    socket.on('msg', msg => {
        io.emit('msg', msg);
        console.log("2")
    });
});

http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`)
});