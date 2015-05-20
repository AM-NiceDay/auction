/** @jsx React.DOM */

var React = require('react');
var $ = require('jquery');

var PlayerPanel = React.createClass({

	componentWillMount: function() {
		var _this = this;

		$.get('/api/game/subscribeOnGameStart/' + this.props.username)
			.done(function() {
				window.location.href = '/game/' + _this.props.username;
			});
	},

	render: function() {
		return null;
	}

});

module.exports = PlayerPanel;