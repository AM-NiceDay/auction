/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router-component');
var Welcome = require('./welcome/Welcome');
var Room = require('./room/Room');
var Game = require('./game/Game');

var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;

var AppRouter = React.createClass({
	render: function() {
		return (
				<div>
					<header>
						<ul>
							<li>
								<a href="/">Home</a>
							</li>
						</ul>
					</header>

					<div className="container">
						<Locations>
							<Location path="/" handler={Welcome} />
							<Location path="/room/:username" handler={Room} />
							<Location path="/game/:username" handler={Game} />
							<NotFound handler={<h1>404 Not Found</h1>} />
						</Locations>
					</div>
				</div>
			);
	}
});

module.exports = AppRouter;

