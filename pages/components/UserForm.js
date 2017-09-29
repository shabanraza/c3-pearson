import React from "react";
import Image from './Image';
import Title from './Title';
import Label from './Label';
import Input from './Input';
import Button from './Button'


export default class UserForm extends React.PureComponent {
	constructor(props){
		super(props)
		this.state = {
			fname:'',
			lname:''
		}
	}
	handleChange (e) {
		console.log(this.state)
	}

	render(){
		const { addUser } = this.props;
		return (
			<div className="c3__userform">
				<form className="c3__Form" onSubmit={e => e.preventDefault()}>
					<Label
						name="fname"
						className="c3__label"
						text={"First Name"}
					/>
					<Input
						type="text"
						value={this.state.fname}
						id="fname"
						name="firstname"
						className="c3__input"
						onChange={(e)=>{this.setState({fname:e.target.value})}}
					/>
					<Label
						name="lname"
						className="c3__label"
						text={"Last Name"}
					/>
					<Input
						type="text"
						value={this.state.lname}
						id="fname"
						name="firstname"
						className="c3__input"
						onChange={(e)=>{this.setState({lname:e.target.value})}}
					/>	
					<Button 
						className="c3__btn"
						text="Add User"
						onClick={(e)=>{
							addUser(this.state)
						}}
					/>

				</form>
			</div>
		);
	} 
}