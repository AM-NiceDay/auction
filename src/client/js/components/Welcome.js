/** @jsx React.DOM */

var React = require('react');

var Welcome = React.createClass({

	render: function() {
		return (
			<div>
				<h1>Welcome to Auction</h1>
				<h4>Choose option:</h4>
				<a href="createRoom">Create room</a><br />
				<a href="joinRoom">Join room</a>
			</div>
		);
	}

});

module.exports = Welcome;