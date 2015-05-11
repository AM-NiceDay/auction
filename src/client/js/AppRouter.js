/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router-component');

var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;

var AppRouter = React.createClass({
	render: function() {
		return (
				<Locations>
					<Location path="/" handler={<h1>Welcome to auction</h1>} />
					<NotFound handler={<h1>404 Not Found</h1>} />
				</Locations>
			);
	}
});

module.exports = AppRouter;

