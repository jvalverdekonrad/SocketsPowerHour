'use strict';

// ------------------ //
// Import config file //
// ------------------ //
const config = require('./server/config');
// ---------------- //
// App Dependencies //
// ---------------- //
const express = require('express');
const ejs     = require('ejs');
// -------------- //
// Initialize App //
// -------------- //
const app  = express();
const http = require('http').Server(app);
const io   = require('socket.io')(http);

// ---------------------- //
// Configurate Enviorment //
// ---------------------- //
app.engine('html', ejs.renderFile);
app.set('views', __dirname + config.viewPath);
app.set('view engine', 'ejs');
app.use(express.static(config.staticFolder));
// -------------------- //
// Socket Configuration //
// -------------------- //
var sockets = require('./server/sockets')(io);
// --------------------- //
// Application Endpoints //
// --------------------- //
var endpoints = require('./server/endpoints')(app);
// ------------------ //
// Application Routes //
// ------------------ //
var routes = require('./server/routes')(app, config);

// ------------- //
// Start the app //
// ------------- //
const port = process.env.PORT || config.port;

http.listen(port, function() {
	console.log('Express is serving at: '+port);
});