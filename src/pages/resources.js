import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Resources extends Component {
	render() {
		return (
			<div>
				<h1>Resources</h1>
				<ul>
					<li><a href="http://www.transequality.org/know-your-rights/passports"> Transequality</a></li>
				</ul>
				<p>Go to <Link to="/">Home Page</Link></p>
			</div>
		);
	}
}
