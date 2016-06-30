// Instance socket.io wrapper.
const socket = io();

const userList = jQuery('#users');

socket.on('connect', function() {
	jQuery.get('/getUserList', function(users) {
		
		initUserList(users);

		const userName = prompt(`What's your name?`);

		socket.emit('create:user', userName, function(user) {
			addUser(user);
			console.log(`User ${user.name} has been registered and was assigned the id ${user.id}`);
		});

	});
});

socket.on('user:created', function(newUser) {
	addUser(newUser);
});

socket.on('create:user', function(newUser) {
	//addUser(newUser);
	console.log(newUser);
});

function initUserList(users) {
	const userAmount = users.length;

	if(userAmount){
		for(let index = 0; index<userAmount; index++){
			addUser(users[index]);
		};
	}
}

function addUser (newUser) {
	userList.append(`<li id="${newUser.id}" >${newUser.name}</li>`);
}