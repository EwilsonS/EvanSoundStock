import React, { Component } from "react";
import API from "../../utils/API";
import { withRouter } from "react-router-dom";
import "./loginDashboard.css";
import { Link } from "react-router-dom";

export class LoginDashboard extends Component {
  state = {
    verify: [],
    name: "",
    email: "",
    password: "",
    online: false,
    id: "",
    valid: true,
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

  // using local storage to set state.
  componentDidMount = () => {
    // If logged in
    if (localStorage.getItem("id") !== null) {
      this.setState({
        online: localStorage.getItem("online"),
        id: localStorage.getItem("id"),
        email: localStorage.getItem("email"),
        name: localStorage.getItem("name"),
        key: localStorage.getItem("artistId")
      })
      this.viewPortfolio()
    } else {
      this.setState({
        online: false,
        id: "",
        email: ""
      })
    }
  }

  reload = () => {
    window.location.reload("/");
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
        this.reload()
      })
  }

  viewPortfolio = () => {
    API.getUser(localStorage.getItem("id"))
      .then(res => {
        this.setState({ artists: res.data.artists })
        // console.log(this.state.artists)
      })
      .then(() => {
        this.buildPortfolio()
      })
  }

  buildPortfolio = () => {
    let elementArr = []
    this.state.artists.forEach(element => {
      API.getUser(element)
        .then((res) => {
          // console.log(`element: ${element}`)
          // console.log(`artists: ${this.state.artists}`)
          // console.log(res.data)
          elementArr.push(res.data)

          this.setState({
            artistsInfo: elementArr
          })
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
        alert(`Oops....Something went wrong`)
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
      // console.log("online? " + this.state.verify.online)
      // console.log(window.location.href)
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
               <form onSubmit={this.login}>
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
                  <div className="buttons mb-3">
                    <button className="buttons1 rounded-0 btn btn-sm btn-outline-info "
                      onClick={this.login}
                      type="submit"
                      value="Log In"
                    >Sign In</button>
                      <Link to="/" >
                        <button className="buttons2 btn btn-info btn-sm float-right rounded-0">Register</button>
                      </Link>
                    {/* <SignUp className="buttons2" /> */}
                  </div>
              </form>
            </div>
          </div>
        </div>

      )
    } else {
      return (
        <div className="sticky-top">
          <div
            className="card card-dash mt-3 rounded-0"
          >
            <div
              className="card-header rounded-0 login"
            >
              <span className="h6 text-light">Hi {this.state.name}!
              </span>
              <div>
                <Link
                  onClick={this.reload}
                  to={`/api/users/${this.state.id}`}>
                  <i className="fas fa-user text-light float-left"> Profile</i>
                  <i
                    className="fas fa-sign-out-alt text-light float-right"
                    onClick={this.logout}> Logout</i>
                </Link>
              </div>
            </div>
            <div
              className="card-body dashboard"
            >
              <span
                className="text-dark viewPortfolio"
                onChange={this.viewPortfolio}
              >My Portfolio
            <i
                  className="fas fa-sync-alt btn float-right refresh-icon"
                  onClick={this.viewPortfolio}></i>
              </span>
              <br />
              {this.state.artistsInfo.map(art => art.account === 'artist' ? (
                <div
                  className="rounded-0 portfolio-card"
                  key={art._id}
                >
                  <Link
                    onClick={this.reload}
                    className="linkage"
                    to={`/api/users/${art._id}`}>
                    <p>
                      <img
                        className="rounded-circle m-2 image2"
                        src={art.imageLink ? art.imageLink :  "https://i2.wp.com/crimsonems.org/wp-content/uploads/2017/10/profile-placeholder.gif?fit=250%2C250&ssl=1"}
                        alt={art.name}
                      />
                      <span
                        className="artist-name text-light"
                      >{art.name}</span>
                    </p>
                  </Link>
                </div>
              ) : (null)
              )}
            </div>
          </div>
        </div>

      )
    }
  }
}

export default withRouter(LoginDashboard)
