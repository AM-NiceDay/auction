/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router-component');
var Welcome = require('./components/Welcome');
var CreateRoom = require('./components/CreateRoom');

var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;

var AppRouter = React.createClass({
	render: function() {
		return (
				<Locations>
					<Location path="/" handler={Welcome} />
					<Location path="/createRoom" handler={CreateRoom} />
					<NotFound handler={<h1>404 Not Found</h1>} />
				</Locations>
			);
	}
});

module.exports = AppRouter;

