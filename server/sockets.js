'use strict';

module.exports = function(io, request) {

	class Player {
		constructor (name) {
			this.name    = name;
			this.id      = this.getGUID();
			this.symbol  = 'x';
			this.playing = false;
		}
		getGUID () {
		  function s4() {
		    return Math.floor((1 + Math.random()) * 0x10000)
		      .toString(16)
		      .substring(1);
		  }
		  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
		    s4() + '-' + s4() + s4() + s4();
		}
	}

	function getAllPokemons(){ 
		let pokemons = null;

		request('http://pokeapi.co/api/v2/pokemon', function(request, response, data){
			pokemons = data;
		});

		return pokemons;
	}

	let players     = {};
	let board       = [];    
	let connections = 0;

	io.on('connection', function(socket) {
		connections = connections + 1;

		io.emit('init:game', new Player(`User-${connections}`) );

		socket.on('disconnect', function() {
			connections = connections - 1;
		});

		socket.on('make:play', function(play){
			socket.broadcast.emit('enemy:play', play);
		});

	});

};