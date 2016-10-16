

function connectIO(server) {
    global.io = require('socket.io')(server);

    // On connect
    global.io.on('connection', function (socket) {

        console.log('********** socket id ' + socket.id + ' connected');

        /* *************************** EVENTS ******************************** */

        // On send message chat
        socket.on('device', function (data) {
            console.log(data);
            socket.emit('device', "Da nhan tin hieu dieu khien");
        });


        // On disconnect app
        socket.on('disconnect', function() {
            console.log('********** socket id ' + socket.id + ' disconnected');
        });

    });
}


exports = module.exports = connectIO;
