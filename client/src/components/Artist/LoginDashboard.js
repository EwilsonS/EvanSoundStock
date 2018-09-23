import React, { Component } from "react";
import API from "../../utils/API";
import SignUp from "../Navbar/SignUp";
import { withRouter } from "react-router-dom";
import "./loginDashboard.css"

export class LoginDashboard extends Component {
  state = {
    verify: [],
    email: "",
    password: "",
    online: false,
    id: "",
    valid: true, //Changes in db also
    artistImage:[],
    key: ""
  }

  // handle any changes to the input fields
  handleInputChange = e => {
    // Pull the name and value properties off of the e.target (the element which triggered the event)
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  // using local storage to set state
  componentDidMount = () => {
    // console.log(localStorage.getItem("id"))
    if (localStorage.getItem("id") !== null) {
      this.setState({
        online: localStorage.getItem("online"),
        id: localStorage.getItem("id"),
        email: localStorage.getItem("email"),
        key: localStorage.getItem("artistId")
      })
      this.viewPortfolio()
    }else{
      this.setState({
        online: false,
        id: "",
        email: ""
      })
    }
  }

  componentDidUpdate = () => {
    // this.viewPortfolio()
  }

  logout = e => {
    e.preventDefault()
    API.updateUserOffline(localStorage.getItem("id"))
      .then(() => {
        this.setState({
          online: false,
          id: "",
          email: "",
          verify: [],
          artistImage:[]
        })
      }).then(() => {
        localStorage.clear()
      })
  }

  viewPortfolio =(e)=>{
    // e.preventDefault()
    API.getUser(localStorage.getItem("id"))
    .then(res => {
      this.setState({artistImage:res.data.artists})
    })
  }

  login = event => {
    event.preventDefault();

    API.getUsersLogin({
      email: this.state.email,
      password: this.state.password
    }).then(res => {
      this.setState({ verify: res.data })
    }).then(() => {
      // check email and password to get user info
      if (
        (this.state.verify.email !== this.state.email) ||
        (this.state.verify.password !== this.state.password) ||
        (!this.state.email) ||
        (!this.state.password)) {
        alert(`Oops...Something went wrong`)
        this.setState({valid:false})
        window.location.reload("/")
      } else{
        API.updateUserOnline(this.state.verify._id)
      }
      
    }).then(() => {
      // set local storage
      if(this.state.valid===true){
      localStorage.setItem("id", this.state.verify._id)
      localStorage.setItem("email", this.state.verify.email)
      localStorage.setItem("online", this.state.verify.online)
      this.setState({ online: true })
      }
      return console.log("invalid login")
    }).then(() => {
      this.viewPortfolio()
      console.log("online? " + this.state.verify.online)
      console.log(window.location.href)
    }).catch(err => console.log(err))
  };

  render() {
    if (this.state.online === false) {
      return (
        <div
          className="card mt-3 sticky-top rounded-0"
          >
          <div
            className="card-header rounded-0 login"
            >
            <span className="text-light h6">Login</span>
          </div>
          <div
            className="card-body login"
          >
            <div className="" >
              <label className="text-light mb-0">Email
            </label><br />
              <input
                className=" form-control  h-25 mb-2 bg-secondary text-light rounded-0"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
              <label className="text-light mb-0">Password
            </label><br />
              <input
                className="form-control  h-25 mb-2 bg-secondary text-light rounded-0"
                placeholder="Password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
              <div className="row mt-2">
                <div className="col-md-3">
                  <button className="rounded-0 btn btn-sm btn-outline-info mt-2 p-1"
                    onClick={this.login}
                    type="submit"
                    value="Log In"
                  >Sign In</button>
                </div>
                <div className="col-md-3">
                  <SignUp />
                </div>
                <div className="col-md-6">
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div
          className="card mt-3 sticky-top rounded-0"
          >
          <div
            className="card-header rounded-0 login"
            >
            <span className="text-light">Hi {this.state.email}!</span>
            <button
              className="btn btn-sm btn-info float-right rounded-0"
              onClick={this.logout}
            >Logout
            </button>
          </div>
          <div
            className="card-body dashboard"
          >
            <h5 
            className="text-light"
            onChange={this.viewPortfolio}

            >My Portfolio
            <button
            className="btn btn-sm btn-info rounded-0 float-right"
            onClick={this.viewPortfolio}
            
            >view</button>
            </h5>
            <br/>
            {this.state.artistImage.map(img => img ?(
            <img 
            className="rounded-circle m-2 image2" 
            src={img} 
            height="50px" 
            alt=""
            key={this.state.key}
            />
            ):(null)
            )}
          </div>
        </div>
      )
    }
  }
}

export default withRouter(LoginDashboard)
