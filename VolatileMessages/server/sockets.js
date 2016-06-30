'use strict';

module.exports = function(io, request) {

	let count = 0;

	io.on('connection', (socket) => {
		
		let messages = setInterval( () => {
			socket.volatile.emit('message', count);
			count = count + 1;
		}, 1000);

		socket.on('disconnect', () => {
			clearInterval(messages);
		});

	});

};