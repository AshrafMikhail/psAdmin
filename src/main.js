"use strict";
var ReactDOM = require('react-dom');
//var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, function(Handler){
ReactDOM.render(<Handler />, document.getElementById('app'));
});