/** @jsx React.DOM */

var React = require('react');
var __ = require('../i18n')._;

module.exports = React.createClass({
  render: function() {
    return (
      <div className="text-center p10">
      {__('you.are.offline')}
      </div>
    );
  }

});