module.exports = function (server) {
    // require the socket.io module
    const io = require('socket.io')(server);

    // chat array
    var chats = [];

    // setup event listener
    io.on('connection', (socket) => {

        //Send all messages to client for the first time.
        socket.emit('all chat messages', chats)

        socket.on('chat message', function (msg) {

            // configuring chat array here
            if (chats.length < 100) {
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

    io.listen(server);

    return io;
}