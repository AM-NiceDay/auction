/** @jsx React.DOM */

var React = require('react');
var $ = require('jquery');

var CreateRoom = React.createClass({

	createRoom: function(event) {
		event.preventDefault();
		var username = React.findDOMNode(this.refs.username).value;
		var data = {
			username: username
		};

		$.ajax({
	    url: '/api/room/create', 
	    type: 'POST', 
	    contentType: 'application/json', 
	    data: JSON.stringify(data)
	  })
			.done(function(data) {
				window.location.href = 'room/' + data.username;
			});
			
	},

	render: function() {
		return (
			<form onSubmit={this.createRoom}>
				<h2>Create room</h2>
				Username: <input type="text" ref="username" />
			</form>
		);
	}

});

module.exports = CreateRoom;