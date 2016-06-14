'use strict';

module.exports = function(app) {

	app.get('/getMessage', function(request, response, next) {
		response.send('Hello! from config endpoints');
	});

};