import React, { Component } from "react";
import API from "../../utils/API";

// import Search  from "./Search"
// import AllArtistsBtn  from "./AllArtistButton";
import { Link } from "react-router-dom";
// import SignUp from "./SignUp";
// import SignIn from "./SignIn";
import "./nav.css";

export class Nav extends Component {
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
  };

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
      // this.viewPortfolio()
    } else {
      this.setState({
        online: false,
        id: "",
        email: ""
      })
    }
  }
  // handle any changes to the input fields
  handleInputChange = e => {
    // Pull the name and value properties off of the e.target (the element which triggered the event)
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  login = event => {
    event.preventDefault();

    API.getUsersLogin({
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        this.setState({ verify: res.data });
      })
      .then(() => {
        // check email and password to get user info
        if (
          this.state.verify.email !== this.state.email ||
          this.state.verify.password !== this.state.password ||
          !this.state.email ||
          !this.state.password
        ) {
          alert(`Oops....Something went wrong`);
          // this.setState({ valid: false })
          window.location.reload("/");
        } else {
          API.updateUserOnline(this.state.verify._id);
        }
      })
      .then(() => {
        // set local storage
        if (this.state.valid === true) {
          localStorage.setItem("id", this.state.verify._id);
          localStorage.setItem("email", this.state.verify.email);
          localStorage.setItem("online", this.state.online);
          localStorage.setItem("name", this.state.verify.name);

          this.setState({ online: true });
        }
        return console.log("invalid login");
      })
      .then(() => {
        this.viewPortfolio();
        console.log("online? " + this.state.verify.online);
        console.log(window.location.href);
      })
      .catch(err => console.log(err));
  };

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
  reload = () => {
    // refresh
    window.location.reload("/");
  }

  render() {
    if (this.state.online == false) {
      return(
        <div className="nav">
          {/* <div className=""> */}
          <div className="col-md-3 left-space">
            <Link to="/">
              <span className="navbar-brand text-info nav-title">
                <span className="text-info h4">
                  <strong>
                    {" "}
                    <span className="flash">S</span>ound
                    <span className="flash2">S</span>tock
                  </strong>
                </span>
              </span>
            </Link>
          </div>
          <div className="col-md-2">
            <Link to="/AllArtists" className="">
              <button className="btn btn-danger text-light btn-sm m-1 button-nav">
                View All Artists
              </button>
            </Link>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-12">
                <div className="register rounded float-right">
                  <p>Register</p>
                  <Link to="../InvestorSignUp">
                    <div className="invest">
                      <span className="reg-btn-txt">Investor</span>
                    </div>
                  </Link>
                  <Link to="../ArtistSignUp">
                    <div className="artist">
                      <span className="reg-btn-txt">Artist</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <br />
                <br />
                <div className="form-group input-icons float-right">
                  <form>
                    <span className="">
                      <i className="fas fa-user" />
                      <input
                        type="text"
                        className="form-control-sm login-input m-1"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                      />
                      <i className="fas fa-lock ml-3" />
                      <input
                        type="password"
                        className="form-control-sm login-input m-1"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                      />
                      <button
                        type="submit"
                        className="btn btn-sm login-input m-2"
                        placeholder="Go"
                        onClick={this.login}
                        type="submit"
                        value="Log In"
                      >
                        Go
                      </button>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      )
    } else {
      return (
        <div className="nav">
          {/* <div className=""> */}
          <div className="col-md-3 left-space">
            <Link to="/">
              <span className="navbar-brand text-info nav-title">
                <span className="text-info h4">
                  <strong>
                    {" "}
                    <span className="flash">S</span>ound
                    <span className="flash2">S</span>tock
                  </strong>
                </span>
              </span>
            </Link>
          </div>
          <div className="col-md-2">
            <Link to="/AllArtists" className="">
              <button className="btn btn-danger text-light btn-sm m-1 button-nav">
                View All Artists
              </button>
            </Link>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-12">
               
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <br />
                <div className="form-group input-icons float-right">
                <i
                    className="fas fa-sign-out-alt text-light float-right"
                    onClick={this.logout}> Logout</i>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      );
    }
  }
}

export default Nav;
