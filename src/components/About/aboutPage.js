"use strict";

var React = require('react');

var About = React.createClass({
	render: function(){
		return (
			<div>
				<h1> About </h1>
				<p>
					this application using the following:
					<ul>
						<li>first</li>
						<li>scond</li>
						<li>third</li>
						<li>foth</li>
					</ul>
				</p>
			</div>
			);
	}
});

module.exports = About;