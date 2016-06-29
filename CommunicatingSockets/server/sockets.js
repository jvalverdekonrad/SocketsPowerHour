'use strict';

module.exports = function(io, request) {

	let connections = 0;

	// io     -> Send Events.
	// socket -> Listen to Events.

	// Instance on connection.
	io.on('connection', function(socket) {
		
		connections = connections + 1;
		io.emit('new:connection', connections);

		socket.on('disconnect', function() {
			connections = connections - 1;
			io.emit('new:disconnection', connections);
		});

	});

};