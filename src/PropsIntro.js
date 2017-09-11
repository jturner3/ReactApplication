import React, { Component } from 'react';

class PropsIntro extends Component {
	render(){
		console.log(this.props);
		return (
		<div>
			<h3>Props Intro</h3>
			<p>Components accepts inputs called 'props' and return React elements describing what should appear on the screen. To access this information use { } with
			the information in the middle.</p>
			<h3>Example of using props</h3>
			<p>Artist: {this.props.name}</p>
			<p>Album: {this.props.title}</p>
			<hr />
		</div>
			);
	}
}
export default PropsIntro;