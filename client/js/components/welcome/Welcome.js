/** @jsx React.DOM */

var React = require('react');
var CreateRoom = require('./CreateRoom');
var JoinRoom = require('./JoinRoom');

var Welcome = React.createClass({

	getInitialState: function() {
		return {
			showCreateRoom: false,
			showJoinRoom: false 
		};
	},

	showCreateRoomForm: function() {
		this.setState({
			showCreateRoom: true,
			showJoinRoom: false
		});
	},

	showJoinRoomForm: function() {
		this.setState({
			showCreateRoom: false,
			showJoinRoom: true
		});
	},

	render: function() {
		return (
			<div>
				<h1>Welcome to Auction</h1>
				<h4>Choose option:</h4>
				<button onClick={ this.showCreateRoomForm }>Create room</button><br />
				<button onClick={ this.showJoinRoomForm }>Join room</button>
				{ this.state.showCreateRoom ? <CreateRoom /> : '' }
				{ this.state.showJoinRoom ? <JoinRoom /> : '' }
			</div>
		);
	}

});

module.exports = Welcome;