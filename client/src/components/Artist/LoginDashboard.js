import React, { Component } from "react";
import API from "../../utils/API";
import SignUp from "../Navbar/SignUp";
import { withRouter } from "react-router-dom";
import "./loginDashboard.css";
import ContactTheDev from "../LayoutWithContent/ContactTheDev"

export class LoginDashboard extends Component {
  state = {
    verify: [],
    name: "",
    email: "",
    password: "",
    online: false,
    id: "",
    valid: true, //Changes in db also
    artists: [],
    key: "",
    artistsInfo: [],
    reform: []
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
        name: localStorage.getItem("name"),
        key: localStorage.getItem("artistId")
      })
      this.viewPortfolio()
      // this.buildPortfolio()
    } else {
      this.setState({
        online: false,
        id: "",
        email: ""
      })
    }
  }

  componentDidUpdate = () => {
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
          artists: []
        })
      }).then(() => {
        localStorage.clear()
      })
  }

  viewPortfolio = () => {
    // e.preventDefault()
    API.getUser(localStorage.getItem("id"))
      .then(res => {
        this.setState({ artists: res.data.artists })
        console.log(this.state.artists)
      })
      .then(() => {
        this.buildPortfolio()
        // this.state.artists.forEach(element => {
        // console.log(`element: ${element}`)
        // API.getUser(element)
        // });
      })
  }

  buildPortfolio = () => {
    this.state.artists.forEach(element => {
      API.getUser(element)
        .then((res) => {
          // console.log(`buildPortfolio(): ${JSON.stringify(res.data)}`)
          // this.setState({ artistsInfo:JSON.stringify(res.data) })
          this.state.artistsInfo.push(JSON.stringify(res.data))
        })
        .then(() => {
          console.log(`artistsInfo: ${this.state.artistsInfo}`)
        })
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
        this.setState({ valid: false })
        window.location.reload("/")
      } else {
        API.updateUserOnline(this.state.verify._id)
      }

    }).then(() => {
      // set local storage
      if (this.state.valid === true) {
        localStorage.setItem("id", this.state.verify._id)
        localStorage.setItem("email", this.state.verify.email)
        localStorage.setItem("online", this.state.verify.online)
        localStorage.setItem("name", this.state.verify.name)

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
        <div>

          <div
            className="card mt-3 rounded-0 login"
          >
            <span className="text-light h6 p-2">Login</span>
            <div className="form-group mx-3">
              <label className="text-light mb-0"> <small>Email</small>
              </label><br />
              <input
                className=" form-control h-25 mb-2 bg-secondary text-light rounded-0"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
              <label className="text-light mb-0"> <small>Password</small>
              </label><br />
              <input
                className="form-control h-25 mb-2 bg-secondary text-light rounded-0"
                placeholder="Password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
              <button className="rounded-0 btn btn-sm btn-outline-info mt-2 p-1"
                onClick={this.login}
                type="submit"
                value="Log In"
              >Sign In</button>
              <SignUp />
            </div>
          </div>
          <ContactTheDev />
        </div>

      )
    } else {
      return (
        <div className="sticky-top">
          <div
            className="card mt-3 rounded-0"
          >
            <div
              className="card-header rounded-0 login"
            >
              <span className=" h5 text-light">Hi {this.state.name}!
            <i
                  className="fas fa-sign-out-alt btn text-light float-right"
                  onClick={this.logout}></i>
              </span>
              {/* <button
              className="btn btn-sm btn-info float-right rounded-0"
              onClick={this.logout}
            >Logout
            </button> */}
            </div>
            <div
              className="card-body dashboard"
            >
              <h6
                className="text-light"
                onChange={this.viewPortfolio}

              >My Portfolio
            <i
                  className="fas fa-sync-alt btn float-right"
                  onClick={this.viewPortfolio}></i>
                {/* <button
                className="btn btn-sm btn-info rounded-0 float-right"
                onClick={this.viewPortfolio}

              >view</button> */}
              </h6>
              <br />
              {this.state.artistsInfo.map(art => art.imageLink ? (
                <div>
                  <img
                    className="rounded-circle m-2 image2"
                    src={art.imageLink}
                    height="50px"
                    alt=""
                    key={this.state.key}
                  />

                </div>
              ) : (null)
              )}
            </div>
          </div>
          <ContactTheDev />
        </div>

      )
    }
  }
}

export default withRouter(LoginDashboard)
