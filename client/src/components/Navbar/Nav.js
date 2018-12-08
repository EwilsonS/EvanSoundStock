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
    valid: true,
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
        key: localStorage.getItem("artistId"),
        artists: (JSON.parse(localStorage.getItem("artists")))
      })
      console.log('======cdm artists from ls=======')
      console.log(JSON.parse(localStorage.getItem("artists")))
      console.log(this.state)

      this.viewPortfolio();
      // this.buildPortfolio();
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
          this.setState({ valid: false })
          window.location.reload("/");
        } else {
          // API.updateUserOnline(this.state.verify._id);
          console.log('Successful login');
        }
      })
      .then(() => {
        // set local storage
        if (this.state.valid === true) {
          localStorage.setItem("id", this.state.verify._id);
          localStorage.setItem("email", this.state.verify.email);
          localStorage.setItem("online", this.state.online);
          localStorage.setItem("name", this.state.verify.name);
          localStorage.setItem("artists", JSON.stringify(this.state.verify.artists));

          this.setState({ online: true });
        }
        return console.log("invalid login");
      })
      .then(() => {
        // this.viewPortfolio();
        console.log("online? " + this.state.verify.online);
        console.log(window.location.href);
      })
      .catch(err => console.log(err));
  };
  viewPortfolio = () => {
    // e.preventDefault()
    API.getUser(localStorage.getItem("id"))
      .then(res => {
        this.setState({ artists: res.data.artists })
        console.log(this.state.artists)
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
          console.log(`element: ${element}`)
          console.log(`artists: ${this.state.artists}`)
          console.log(res.data)
          elementArr.push(res.data)

          this.setState({
            artistsInfo: elementArr
          })
        })
    })
  }
  // logout = e => {
  //   e.preventDefault()

  //   API.updateUserOffline(localStorage.getItem("id")) //check this endpoint
  //     .then(() => {
  //       this.setState({
  //         online: false,
  //         id: "",
  //         email: "",
  //         verify: [],
  //         artists: []
  //       })
  //     }).then(() => {
  //       localStorage.clear()
  //       this.reload()
  //     })
  // }
  logout = e => {
    e.preventDefault()
    localStorage.clear()

        this.setState({
          online: false,
          id: "",
          email: "",
          verify: [],
          artists: []
        })

        this.reload()
  }
  reload = () => {
    // refresh
    window.location.reload("/");
  }

  render() {
    if (this.state.online === false) {
      return (
        <div className="nav">
          <div className="col-md-5 nav-left-col">
            <div>
              <Link to="/">
                <span className="navbar-brand text-info nav-title1 p-0">
                  <span className="text-light welcome-to"> Welcome to </span>
                  <br />
                  <strong>
                    <span className="flash">S</span>ound
                    <span className="flash2">S</span>tock.io
                    <br />
                  </strong>
                  <Link to="/AllArtists" className="btn btn-danger btn-sm all-artists-btn">
                    View All Available Artists
                    </Link>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-md-7 nav-right-col">
            <div className="row mb-2">
              <div className="col-md-3"></div>
                <div className="col-md-6">
                  <div className="register rounded">
                      <p>Register</p>
                      <Link to="../InvestorSignUp">
                        <span className="invest">
                          <span className="reg-btn-txt">Investor</span>
                        </span>
                      </Link>
                      <Link to="../ArtistSignUp">
                        <span className="artist">
                          <span className="reg-btn-txt">Artist</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                <div className="col-md-3"></div>
              </div>
              <br />

            <div className="form-group input-icons">
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
                    className="btn btn-sm go m-2"
                    placeholder="Go"
                    onClick={this.login}
                    value="Log In"
                  >
                    Go
                      </button>
                </span>
              </form>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="nav">
           <div className="col-md-5 nav-left-col">
            <div>
              <Link to="/">
                <span className="navbar-brand text-info nav-title1 p-0">
                  <span className="h4 text-light welcome-to"> Welcome to </span>
                  <br />
                  <strong>
                    <span className="flash">S</span>ound
                    <span className="flash2">S</span>tock.io
                    <br />
                  </strong>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-md-7 nav-col-right">
            <div className="row">
              <div className="col-md-12">

              </div>
            </div>
            <div className="row">
            <div className="col-md-3"></div>

              <div className="col-md-6">
                <br />
                <div className="form-group input-icons logged-in-panel">
                  <p className="text-light"><span>Hi {this.state.name}!
                <span className="float-right">
                      <Link
                        onClick={this.reload}
                        to={`/api/users/${this.state.id}`}>
                        <i className="fas fa-user text-light mr-3"> Profile</i>
                      </Link>
                      <Link to="">
                        <i
                          className="fas fa-sign-out-alt text-light m-1"
                          onClick={this.logout}> Logout</i>
                      </Link>
                    </span>
                  </span>
                  </p>
                  <p className="mb-0 text-light">Your Portfolio</p>
                  {this.state.artistsInfo.map(art => art.imageLink ? (
                    <div
                      className="rounded-0 portfolio-card-nav"
                      key={art._id}
                    >
                      <Link
                        onClick={this.reload}
                        className="linkage"
                        to={`/api/users/${art._id}`}>
                        <p>
                          <img
                            className="rounded-circle m-2 image2-nav"
                            src={art.imageLink}
                            alt=""
                          />
                          <span
                            className="artist-name text-light"
                          >{art.name}</span>
                        </p>
                      </Link>
                      {/* <button
                    className="delete-btn"
                    onClick={this.delete}
                  >x</button> */}
                    </div>
                  ) : (null)
                  )}
                  <Link to="/AllArtists" className="btn btn-danger btn-sm btn-block m-1">
                    <div className="">
                      Browse All Artists
              </div>
                  </Link>
                </div>
              </div>
            <div className="col-md-3"></div>

            </div>
          </div>
        </div>
      );
    }
  }
}

export default Nav;
