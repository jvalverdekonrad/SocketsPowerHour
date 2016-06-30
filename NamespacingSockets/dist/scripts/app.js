'use strict';

var socket = io();

var news = io.connect('/news');
var opinions = io.connect('/opinions');

var container = jQuery('#container');
var newsBtn = jQuery('#newsBtn');
var opinionsBtn = jQuery('#opinionsBtn');

newsBtn.on('click', function () {
	news.emit('get');
});

news.on('news:sended', function (newsObj) {
	container.html('<h1>' + newsObj + '</h1>');
});

opinions.on('opinions:sended', function (opinionsSended) {
	var opinionList = '';

	for (var opinion in opinionsSended) {
		opinionList = opinionList + ('<li><strong>' + opinion + ' :</strong> ' + opinionsSended[opinion] + '</li>');
	}

	container.html('<ul class="opinions" >' + opinionList + '</ul>');
});

opinionsBtn.on('click', function () {
	opinions.emit('get');
});