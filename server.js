const io = require('socket.io')(http);
const port = process.env.PORT || 3000;



io.on('connection', (socket) => {
    console.log("new")
    console.log(socket)
    socket.on('event', msg => {
        io.emit('event', msg);
        console.log(msg)
    });
});



http.listen(3000, () => {
    console.log(`Socket.IO server running at http://localhost:${3000}/`)
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