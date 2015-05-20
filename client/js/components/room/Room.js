/** @jsx React.DOM */

var React = require('react');
var $ = require('jquery');
var Creator = require('./Creator');
var PlayersList = require('./PlayersList');
var CreatorPanel = require('./CreatorPanel');
var PlayerPanel = require('./PlayerPanel');

var Room = React.createClass({

	getInitialState: function() {
		return {
			data: false,
			creator: null,
			players: []
		};
	},

	componentWillMount: function() {
		var _this = this;

		$.get('/api/room/getState')
			.done(function(roomState) {
				if (_this.isMounted()) {
					roomState.data = true;
					_this.setState(roomState);
					_this.listenRoomState();
				}
			});
	},

	listenRoomState: function() {
		var _this = this;

		$.get('/api/room/subscribe')
			.done(function(roomState) {
				if (_this.isMounted()) {
					_this.setState(roomState);
					_this.listenRoomState();
				}
			})
			.fail(function() {
				console.log('The server is not responding')
				setTimeout(function() {
					console.log('Trying to reconnect');
					_this.componentWillMount();
				}, 3000);
			});
	},

	render: function() {
		if (!this.state.data) {
			return <h1>Loading</h1>
		}
		return (
			<div>
				<p>Hello, <strong>{this.props.username}</strong></p>
				<Creator creator={this.state.creator} />
				<PlayersList players={this.state.players} />
				{
	        this.state.creator == this.props.username ? 
	          <CreatorPanel username={this.props.username} /> : <PlayerPanel username={this.props.username} />
	      }
			</div>
		);
	}

});

module.exports = Room;