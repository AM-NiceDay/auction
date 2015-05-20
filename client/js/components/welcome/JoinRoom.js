/** @jsx React.DOM */

var React = require('react');
var $ = require('jquery');

var JoinRoom = React.createClass({

	joinRoom: function(event) {
		event.preventDefault();
		var username = React.findDOMNode(this.refs.username).value;
		var data = {
			username: username
		};

		$.ajax({
	    url: '/api/room/join', 
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
			<form onSubmit={this.joinRoom}>
				<h2>Join room</h2>
				Username: <input type="text" ref="username" />
			</form>
		);
	}

});

module.exports = JoinRoom;