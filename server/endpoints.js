'use strict';

module.exports = function(app, reuqest) {

	app.get('/getMessage', function(request, response, next) {
		response.send('Hello! from config endpoints');
	});

};