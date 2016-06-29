'use strict';

module.exports = function(app, config) {

	// ----- //
	// Index //
	// ----- //
	app.get('/', function(request, response, next) {
		response.sendFile('index.html', { root : config.viewPath });
	});

};