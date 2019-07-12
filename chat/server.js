// require the http module
const server = require('http').createServer();
// require the socket.io module
const io = require('socket.io')(server);

// chat array
var chats = [];

// setup event listener
io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('chat message', function (msg) {

        // configuring chat array here
        if (chats.length < 5) {
            chats.push(msg);
        } else {
            chats.shift();
            chats.push(msg);
        }
        console.log(chats);
        // broadcasting here
        io.emit('chat message', msg);


    });
    // notification
    socket.emit('notification', {
        type: 'test',
        message: 'test'
    });

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

// defining port
let socketPort = process.env.CHAT_PORT || 4235;
server.listen(socketPort, () => {
    console.log(`Chat Listening port ${socketPort}`);
});
io.listen(server);