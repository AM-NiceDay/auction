/** @jsx React.DOM */

var React = require('react');
var $ = require('jquery');

var CreatorPanel = React.createClass({

	startGame: function(e) {
		var _this = this;
		$.get('/api/game/start').
			done(function() {
				window.location.href = '/game/' + _this.props.username;
			});
	},

	render: function() {
		return (
			<div>
				<button onClick={this.startGame}>Start game</button>
			</div>
		);
	}

});

module.exports = CreatorPanel;