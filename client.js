
//socket client.js
var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000', {reconnect: true});

socket.emit('van1', "81");

socket.on('van1', function (data) {
	console.log(data);
});