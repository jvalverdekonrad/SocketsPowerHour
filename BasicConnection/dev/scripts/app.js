// Instance socket.io wrapper.
const socket = io();

// An event happened in the server side.
socket.on('event:happened', function(/* Paremeters */) {
	// Do something.
});

// Sending event from client to server.
socket.emit('sending:sending', { /* Payload. */} );	