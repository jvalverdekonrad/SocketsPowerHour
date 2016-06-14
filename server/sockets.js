'use strict';

module.exports = function(io) {

	let comments    = [];
	let connections = 0;

	io.on('connection', function(socket) {

		connections = (connections + 1);

		io.emit('init:comments', comments);
		io.emit('new:connection', connections);

		socket.on('disconnect', function() {
			connections = (connections - 1);
		});

		socket.on('add:comment', function(comment) {
			comments = [...comments, comment];

			io.emit('comments:updated', comments);

		});

	});

};