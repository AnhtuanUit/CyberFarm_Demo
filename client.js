
//socket client.js
var io = require('socket.io-client');
var socket = io.connect('http://14.161.7.94:7000', {reconnect: true});

socket.emit('device', "11");

socket.on('device', function (data) {
	console.log(data);
});