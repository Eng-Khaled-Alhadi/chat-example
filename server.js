const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
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



http.listen(3000, () => {
    console.log(`Socket.IO server running at http://chat-eagle.herokuapp.com:${3000}/`)
});



// const app  = require("uWebSockets.js")();
// const io = require("socket.io")();

// // const app = new App();
// // const io = new Server();

// io.attachApp(app);

// io.on("connection", (socket) => {
//   // ...
//   console.warn(socket);
  
// });

// app.listen(3000, (token) => {
//   if (!token) {
//     console.warn("port already in use");
//   }
// });