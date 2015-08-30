var React = require('react');
var DataProxy = require('../DataProxy');
var $ = require('jquery');

var dataProxy = new DataProxy();

var Home = React.createClass({
  componentDidMount: function(){
  },
  fetchData: function(){
  },
  getInitialState: function(){
    return null;
  },
  render: function (){
    return (
      <div className="container page">
      Home
      </div>
    );
  }
})

module.exports = Home;
