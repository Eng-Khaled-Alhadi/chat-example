const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/chat', (req, res) => {
    console.log("1")
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log("new")
    socket.on('event', msg => {
        io.emit('event', msg);
        console.log(msg)
    });
});



http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`)
});