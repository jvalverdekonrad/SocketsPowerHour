'use strict';

module.exports = function(io, app) {

	let users = [];

	function GUID() {
	  function s4() {
	    return Math.floor((1 + Math.random()) * 0x10000)
	      .toString(16)
	      .substring(1);
	  }
	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	    s4() + '-' + s4() + s4() + s4();
	}

	// io     -> Send Events.
	// socket -> Listen to Events.

	// Instance on connection.
	io.on('connection', function(socket) {
		
		socket.on('disconnect', function() {
			
		});

		socket.on('create:user', function(name, callback){
			const newUser = {
				name : name,
				id   : GUID()
			};

			users = [...users, newUser];

			socket.broadcast.emit('user:created', newUser);
			callback(newUser);
			
		});

	});

	app.get('/getUserList', function(request, response, next) {
		response.send(users);
	});


};