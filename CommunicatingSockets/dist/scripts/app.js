'use strict';

// Instance socket.io wrapper.
var socket = io();

var connectionCounter = jQuery('#connection-counter');

socket.on('new:connection', function (connectionAmount) {
	connectionCounter.html(connectionAmount);
});

socket.on('new:disconnection', function (connectionAmount) {
	connectionCounter.html(connectionAmount);
});

// Sending event from client to server.
socket.emit('sending:sending', {/* Payload. */});