const socket = io();

jQuery('#commentForm').on('submit', function() {

	socket.emit('add:comment', jQuery('#comment').val() );
	jQuery('#comment').val('');
	return false;

});

socket.on('comments:updated', function(comments) {
	updateComments(comments);
});

socket.on('init:comments', function(comments) {
	updateComments(comments);
});



function updateComments(comments) {
	var displayedComments = '';

	comments.forEach(function(comment){
		displayedComments = displayedComments + '<li>'+comment+'</li>';
	});

	jQuery('#comments').html(displayedComments);
}

function Player ({ id }) {
	this.id = id;
}

var x = Player(1);

console.log(`${x} caca`);
// When The action name is generic
// verb:subject -> create:comment
// When the subject did or was part of the action
// subject:verb -> comments:updated