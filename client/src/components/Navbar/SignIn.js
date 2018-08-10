import React, { Component } from "react"
import API from "../../utils/API";

const styles = {
	dropdown: {
		backgroundColor: "#02183a"
	},
}


export class SignIn extends Component {

	state = {
		email: "",
		password: ""
	}

	// handle any changes to the input fields
	handleInputChange = event => {
		// Pull the name and value properties off of the event.target (the element which triggered the event)
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		API.saveUser({
			email: this.state.email,
			password: this.state.password
	}).then(res => {
		this.console.log(res)
		this.props.history.push('/')
	})
			.catch(err => console.log(err))
	};

	render() {
		return (
			<div className="nav-item dropdown">
				<button className="btn btn-sm btn-outline-info nav-link dropdown-toggle m-1" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false">Sign In</button>
				<div className="dropdown-menu" style={styles.dropdown}>
					<label className="text-light">Email
           <input
							className="form-control my-2 my-sm-1 bg-secondary text-light"
							placeholder="Email"
							name="email"
							value={this.state.email}
							onChange={this.handleInputChange}
						/>
					</label>
					<label className="text-light">Password
             <input
							className="form-control my-2 my-sm-1 bg-secondary text-light"
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChange={this.handleInputChange}
						/>
					</label>
					<button className="btn btn-sm btn-info m-1" onClick={this.handleFormSubmit}>Sign In</button>
				</div>
			</div>
		)
	}
}