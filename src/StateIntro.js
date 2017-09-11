import React, { Component } from 'react';

class StateIntro extends Component {
	constructor(){
		super();
		this.state = {
			name: "Michael Bolton",
			otherName: "Kenny G"
		}
	}

	changeNameOne(event){
		this.setState({name: event.target.value});
	}

	changeNameTwo(event){
		this.setState({otherName: event.target.value});
	}

	render(){
		return(
			<div>
				<h3>State Intro</h3>
				<input type="text" onChange={this.changeNameOne.bind(this)} />
				<input type="text" onChange={this.changeNameTwo.bind(this)} />
				<p>{this.state.name} and {this.state.otherName} are the greatest musicians ever!!!</p>
				<hr />
			</div>
			);
	}
}
export default StateIntro;