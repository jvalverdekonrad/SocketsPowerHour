'use strict';

module.exports = function(io, request) {
	// Client Connection.
	const opinions   = io.of('/opinions');
	const opinionObj = {
		'Alonso'   : 'Me cago en Lonis.',
		'Canessa'  : 'Que picha vivir.',
		'Pizzarro' : 'zZZ',
	};

	opinions.on('connection', (socket) => {
		
		socket.on('get', () => {
			opinions.emit('opinions:sended', opinionObj);
		});

	});

	// Admin Conection.
	const news    = io.of('/news');
	const newsObj = 'Sequía: Birra se termina en KG.';

	news.on('connection', (socket) => {

		socket.on('get', (socket) => {
			news.emit('news:sended', newsObj);
		});

	});

};