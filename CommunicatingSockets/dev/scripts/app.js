// Instance socket.io wrapper.
const socket = io();

const connectionCounter = jQuery('#connection-counter');

socket.on('new:connection', (connectionAmount) => {	
	connectionCounter.html(connectionAmount);
});

socket.on('new:disconnection', (connectionAmount) => {	
	connectionCounter.html(connectionAmount);
});

// Sending event from client to server.
socket.emit('sending:sending', { /* Payload. */} );