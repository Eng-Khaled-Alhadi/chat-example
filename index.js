// const app = require('express')();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);
// const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     console.log("1")
//     res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//     console.log("new")
//     socket.on('event', msg => {
//         io.emit('event', msg);
//         console.log(msg)
//     });
// });



// http.listen(port, () => {
//     console.log(`Socket.IO server running at http://localhost:${port}/`)
// });




const { App } = require("uWebSockets.js");
const { Server } = require("socket.io");

const app = new App();
const io = new Server();

io.attachApp(app);

io.on("connection", (socket) => {
  // ...
});

app.listen(3000, (token) => {
  if (!token) {
    console.warn("port already in use");
  }
});