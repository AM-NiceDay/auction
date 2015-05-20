/** @jsx React.DOM */

var React = require('react');

var Good = React.createClass({

  render: function() {
    return (
      <div>
        <p>Good: <strong>{this.props.good.name}</strong></p>
        <p>Price: <strong>{this.props.good.price}</strong></p>
      </div>
    );
  }

});

module.exports = Good;