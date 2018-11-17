import React, { Component } from "react"
// import { Router } from 'react-router'
import API from "../../utils/API";
import { withRouter } from "react-router-dom";
// import setInStorage from "../../utils/storage"

const styles = {
	dropdownSignIn: {
		backgroundColor: "rgba(2,24,58, .75)",
		zIndex: 1,
		// padding: "20%"
	},
}


class SignIn extends Component {

	state = {
		verify: [],
		email: "",
		password: "",
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
		// if (!this.state.email || !this.state.password) {
		// 	alert("Please don't leave any fields blank")
		// }
			API.getUsersLogin({
				email: this.state.email,
				password: this.state.password
			}).then(res => {
				this.setState({ verify: res.data })
				console.log(res.data)
				if ((this.state.verify.email !== this.state.email) ||
					(this.state.verify.password !== this.state.password)||
					(!this.state.email) || 
					(!this.state.password))
					{
					alert(`Oops...Something went wrong`)
				} else{
					this.props.history.push(`/api/login/${this.state.verify._id}`)
				}
			})
				.catch(err => console.log(err))
		
	};

	render() {
		return (
			<div className="nav-item dropdown p-0 mt-2" style={styles.dropdownSignIn}>
				<button className="btn btn-sm btn-outline-info nav-link dropdown-toggle m-1 p-1" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false">Sign In</button>
				<div className="dropdown-menu" style={styles.dropdownSignIn}>
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
							type="password"
							value={this.state.password}
							onChange={this.handleInputChange}
						/>
					</label>
					{/* <Link to="/"> */}
					<button className="btn btn-sm btn-info m-1 p-1"
						onClick={this.handleFormSubmit}
						type="submit"
						value="Log In"
					>Sign In</button>
					{/* </Link> */}
				</div>
			</div>
		)
	}
}

export default withRouter(SignIn)