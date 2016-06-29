'use strict';

module.exports = function(io, request) {

	// Instance on connection.
	io.on('connection', function(socket) {
		// Set disconnection actions.
		socket.on('disconnect', function() {
			// Do something.
		});

		// An event happened in the client side.
		socket.on('event:happened', function(/* Paremeters */) {
			// Do something.
		});

		// emit vs broadcast.emit
		// emit           -> Sends an event to everyone.
		// broadcast.emit -> Sends an event to everyone but whoever trigger the client event.

		// Sending an event from the server to the client.
		io.emit('sending:event', {/* Payload */} );

		socket.on('client:did:stuff', function(play){
			// Broadcast an event.
			socket.broadcast.emit('enemy:play', play);
		});


	});

};