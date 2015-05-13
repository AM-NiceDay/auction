/** @jsx React.DOM */

var React = require('react');

var CreateRoom = React.createClass({

	getInitialState: function() {
		return {
			name: ''
		};
	},

	createRoom: function(event) {
		event.preventDefault();
		var _this = this;
		var name = React.findDOMNode(this.refs.name).value;

		var xhr = new XMLHttpRequest();
		xhr.open('POST', '/api/createRoom', true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify({ name: name }));

		xhr.onload = function() {
			_this.setState({ message: xhr.responseText });
		}
	},

	render: function() {
		return (
			<form onSubmit={this.createRoom}>
				Name: <input type="text" ref="name" />
				<h2>{this.state.message}</h2>
			</form>
		);
	}

});

module.exports = CreateRoom;