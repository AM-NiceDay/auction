/** @jsx React.DOM */

var React = require('react');

var PlayersList = React.createClass({

	render: function() {
		if (this.props.players.length == 0) {
			return (
				<div>
					<h2>No players</h2>
				</div>
			)
		}

		playersList = this.props.players.map(function(player) {
			return (
				<li key={player}>{player}</li>
			)
		});

		return (
			<div>
				List of players:
				<ul>
					{ playersList }
				</ul>
			</div>
		);
	}

});

module.exports = PlayersList;