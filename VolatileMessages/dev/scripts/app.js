const socket = io();

const news     = io.connect('/news');
const opinions = io.connect('/opinions');

const container   = jQuery('#container');
const newsBtn     = jQuery('#newsBtn');
const opinionsBtn = jQuery('#opinionsBtn');

newsBtn.on('click', () => {
	news.emit('get');
});

news.on('news:sended', (newsObj) => {
	container.html(`<h1>${newsObj}</h1>`);
});


opinions.on('opinions:sended', (opinionsSended) => {
	let opinionList = '';

	for (var opinion in opinionsSended) {
		opinionList = opinionList + `<li><strong>${opinion} :</strong> ${opinionsSended[opinion]}</li>`
	}

	container.html(`<ul class="opinions" >${opinionList}</ul>`);
});

opinionsBtn.on('click', () => {
	opinions.emit('get');
});