import React, { Component, Fragment } from 'react';
import './App.css';
import HeaderLogo from './components/HeaderLogo'
import UserInput from './UserInput/UserInput'
import UserOutput from "./UserOutput/UserOutput"
class App extends Component {
	constructor(props){
		super(props);
		this.state={
			userName : 'Huu Trung'
		}
	}
	onChangeName= (event) =>{
		var target = event.target;
		var name = target.name;
		var value = target.value;
		this.setState({
            [name]: value
		});
	}
  	render() {
		var { userName } = this.state; // var userName = this.state.username;
		return (
			<Fragment>
				<HeaderLogo /> 
				{/* input form */}
				<div className="row">
					<UserInput 
						onChangeName = { this.onChangeName} 
						currentName = {this.state.userName}
					/>
				</div>
				{/* display panel */}
				<div className="row">
					<UserOutput userName={ userName}/>
					<UserOutput userName={ userName}/>
					<UserOutput userName="Trung"/>
				</div>
		
		</Fragment>
		);
 	 }
}

export default App;
