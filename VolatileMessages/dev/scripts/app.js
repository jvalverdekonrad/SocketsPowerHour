const socket = io();

const message = jQuery('#message');

socket.on('message', (newMessage) => {
	message.html(newMessage);
});