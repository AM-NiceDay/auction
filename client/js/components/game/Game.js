/** @jsx React.DOM */

var React = require('react');
var $ = require('jquery');
var CreatorView = require('./CreatorView');
var PlayerView = require('./PlayerView');
var Good = require('./Good');

var Game = React.createClass({

  getInitialState: function() {
    return {
      data: false,
      good: {}
    };
  },

  componentWillMount: function() {
    var _this = this;

    this.subscribeOnGoods();

    $.ajax({
      url: '/api/game/' + this.props.username,
      cache: false
    })
      .done(function(gameState) {
        if (_this.isMounted()) {
          gameState.data = true;
          _this.setState(gameState);
        }
      });

  },

  subscribeOnGoods: function() {
    var _this = this;
    $.ajax({
      url: '/api/game/subscribeOnGoods',
      cache: false
    })
      .done(function(good) {
        if (_this.isMounted()) {
          _this.setState({
            good: good
          });
          _this.subscribeOnGoods();
        }
      })
  },

  render: function() {
    if (!this.state.data) {
      return <h1>Loading</h1>
    }

    return (
      <div>
        <p>Hello, <strong>{this.props.username}</strong></p>
        <p>Game creator: <strong>{this.state.creator}</strong></p>
        { this.state.isCreator ? /*<CreatorView players={this.state.players} />*/ null : <PlayerView username={this.props.username} player={this.state.player} /> }
        { this.state.good.isResults ? <CreatorView players={this.state.good.results.players} /> : <Good good={this.state.good} /> }
      </div>
    );
  }
});

module.exports = Game;