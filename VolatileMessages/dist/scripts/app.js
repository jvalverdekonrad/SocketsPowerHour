'use strict';

var socket = io();

var message = jQuery('#message');

socket.on('message', function (newMessage) {
	message.html(newMessage);
});