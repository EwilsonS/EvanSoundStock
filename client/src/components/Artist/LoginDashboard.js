import React, { Component } from "react";
import API from "../../utils/API";
import { withRouter } from "react-router-dom";
import SignUp from "../Navbar/SignUp";

const styles = {
  dropdown: {
    backgroundColor: "#02183a",
    zIndex: 20000000,
    padding: "20%"
  },
  login: {
    backgroundColor: "#02183a",
  },
  card: {
    boxShadow: "3px 4px 8px 0px rgba(50, 50, 50, 0.20)"
  }
}

export class LoginDashboard extends Component {
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
        (this.state.verify.password !== this.state.password) ||
        (!this.state.email) ||
        (!this.state.password)) {
        alert(`Oops...Something went wrong`)
      } else {
        this.props.history.push(`/api/user/${this.state.verify._id}`)
      }
    })
      .catch(err => console.log(err))

  };
  render() {
    return (
      <div
        className="card mt-3 sticky-top rounded-0"
        style={styles.card}>
        <div
          className="card-header"
          style={styles.login}>
          <span className="text-light">Login</span>
        </div>
        <div
          className="card-body"
          style={styles.login}
        >
          <div className="" >
            <label className="text-light mb-0">Email
            </label><br />
            <input
              className=" mb-2 bg-secondary text-light rounded-0"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <label className="text-light mb-0">Password
            </label><br />
            <input
              className="mb-2 bg-secondary text-light rounded-0"
              placeholder="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <div className="row mt-2">
              <div className="col-md-3">
                {/* <Link to="/"> */}
                <button className="btn btn-sm btn-info m-1 p-1"
                  onClick={this.handleFormSubmit}
                  type="submit"
                  value="Log In"
                >Sign In</button>
              </div>
              <div className="col-md-6">
                {/* </Link> */}
                <SignUp />
              </div>
              <div className="col-md-3">
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(LoginDashboard)
