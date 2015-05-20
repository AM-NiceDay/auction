/** @jsx React.DOM */

var React = require('react');

var Creator = React.createClass({

	render: function() {
		var Creator;

		if (this.props.creator != null) {
			Creator = (
        <p>Game creator: <strong>{this.props.creator}</strong></p>
			)
		} else {
			Creator = (
				<p>The room has no creator</p>
			);
		}

		return Creator;
	}

});

module.exports = Creator;