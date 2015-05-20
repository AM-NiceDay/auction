/** @jsx React.DOM */

var React = require('react');
var $ = require('jquery');

var PlayerView = React.createClass({

  getInitialState: function() {
    return {
      player: this.props.player 
    };
  },

  buy: function() {
    var _this = this;

    $.get('/api/game/buy/' + this.props.username)
      .done(function(player) {
        if (_this.isMounted()) {
          _this.setState(player);
        }
      })
  },

  render: function() {
    var player = this.state.player;
    return (
      <div>
        <p>Money: <strong>{player.money}</strong></p>
        <p>Goods: <strong>{player.goods.length != 0 ? player.goods.join(', ') : '-'}</strong></p>
        <button onClick={this.buy} >Buy</button>
      </div>
    );
  }

});

module.exports = PlayerView;