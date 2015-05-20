/** @jsx React.DOM */

var React = require('react');
var $ = require('jquery');

var CreatorView = React.createClass({
  render: function() {
    var players = this.props.players;
    var playersList = [];
    for (name in players) {
      var playerState = (
        <tr key={name}>
          <td>{name}</td>
          <td>{players[name].money}</td>
          <td>{players[name].goods.length != 0 ? players[name].goods.join(', ') : '-'}</td>
        </tr>
      );  
      playersList.push(playerState);
    }

    return (
      <div>
        <table>
          <tr>
            <td>Name</td>
            <td>Money</td>
            <td>Goods</td>
          </tr>
          { playersList }
        </table>
      </div>
    );
  }

});

module.exports = CreatorView;