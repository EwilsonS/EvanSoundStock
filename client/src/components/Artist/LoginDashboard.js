import React, { Component } from "react";
import API from "../../utils/API";
import SignUp from "../Navbar/SignUp";
import { withRouter } from "react-router-dom";

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
    boxShadow: "3px 4px 8px 0px rgba(50, 50, 50, 0.20)",
    fontSize: "15px"
  },
  dashboard: {
    background: "#237c9a"
  }
}

export class LoginDashboard extends Component {
  state = {
    verify: [],
    email: "",
    password: "",
    online: false,
    id: "",
    valid: true,
    artistImage:[]
  }

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // using local storage to set state
  componentDidMount = () => {
    // console.log(localStorage.getItem("id"))
    if (localStorage.getItem("id") !== null) {
      this.setState({
        // online: localStorage.getItem("online"),
        online: localStorage.getItem("online"),
        id: localStorage.getItem("id"),
        email: localStorage.getItem("email"),
        // artistImage: localStorage.getItem("artistImage")        
      })
        
    }else{
      this.setState({
        online: false,
        id: "",
        email: ""
      })
    }
  }

  logout = event => {
    event.preventDefault()
    API.updateUserOffline(localStorage.getItem("id"))
      .then(() => {
        this.setState({
          online: false,
          id: "",
          email: ""
        })
      }).then(() => {
        localStorage.removeItem("online")
        localStorage.removeItem("id")
        localStorage.removeItem("email")

      }).then(res => {
        console.log("online? " + this.state.verify.online)

      })
  }

  viewPortfolio =(e)=>{
    e.preventDefault()
    API.getUser(localStorage.getItem("id"))
    .then(res => {
      console.log(res.data.artists)
      this.setState({artistImage:res.data.artists})
      console.log(this.state.artistImage)
    })
  }

  login = event => {
    event.preventDefault();

    API.getUsersLogin({
      email: this.state.email,
      password: this.state.password
    }).then(res => {
      this.setState({ verify: res.data })
      console.log(res)
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
      console.log("online? " + this.state.verify.online)
      console.log(window.location.href)
    }).catch(err => console.log(err))
  };

  render() {
    if (this.state.online === false) {
      return (
        <div
          className="card mt-3 sticky-top rounded-0"
          style={styles.card}>
          <div
            className="card-header rounded-0"
            style={styles.login}>
            <span className="text-light h6">Login</span>
          </div>
          <div
            className="card-body"
            style={styles.login}
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
                  {/* <Link to="/"> */}
                  <button className="rounded-0 btn btn-sm btn-outline-info m-1 p-1"
                    onClick={this.login}
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
    } else {
      return (
        <div
          className="card mt-3 sticky-top rounded-0"
          style={styles.card}>
          <div
            className="card-header rounded-0"
            style={styles.login}>
            <span className="text-light">Hi {this.state.email}!</span>
            <button
              className="btn btn-sm btn-info float-right rounded-0"
              onClick={this.logout}
            >Logout
            </button>
          </div>
          <div
            className="card-body"
            style={styles.dashboard}
          >
            <h5 className="text-light ">My Portfolio
            <button
            className="btn btn-sm btn-info rounded-0 float-right"
            onClick={this.viewPortfolio}
            >view</button>
            </h5>
            <br/>
            {this.state.artistImage.map(img => img ?(
            <img className="rounded-circle m-2" src={img} height="50px" alt=""/>
            ):(null)
            )}
            
             

          </div>
        </div>
      )
    }
  }
}

export default withRouter(LoginDashboard)
