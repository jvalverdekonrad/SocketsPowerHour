const socket = io();
let Player = null;

socket.on('init:game', function(_Player) {
	Player = _Player;
});

socket.on('poke:mon', function(pokemons) {
	console.log(pokemons);
});

socket.on('enemy:play', function(data) {
	console.log(data);
});

// To trigger an action.
// verb:subject -> create:comment
// When the action has been executed
// subject:verb -> comments:updated

jQuery('.tile').on('click', function(){

	let element = jQuery(this);

	socket.emit('make:play', {
		Player : Player,
		x      : element.data('x'),
		y      : element.data('y'),
	});	

});