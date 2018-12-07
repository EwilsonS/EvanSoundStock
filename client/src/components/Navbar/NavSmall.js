import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import "./navsmall.css";

export class NavSmall extends Component {

  render() {
    if (localStorage.getItem('id') !== null) {
      return (
        <nav className="navsmall">
          <div className="col-md-3 left-space"></div>
          <div className="col-md-6">
            <div className="row">
              <Link to="/">
                <div className="col-md-3">
                  <span className="navbar-brand text-info nav-title">
                    <span className="text-info h4"><strong> <span className="flash">S</span>ound<span className="flash2">S</span>tock</strong></span>
                  </span>
                </div>
              </Link>
              <Link to="/AllArtists" className="m-1">
                <div className="col-md-4">
                  <button className="btn btn-danger text-light btn-sm m-1 button-nav">View All Artists</button>
                </div>
              </Link>
              <div className="col-md-5">
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </nav>
      )
    } else {
      return (
        <nav className="navsmall">
          <div className="col-md-3 left-space"></div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-3">
                  <Link to="/">
                    <span className="navbar-brand text-info nav-title">
                      <span className="text-info h4"><strong> <span className="flash">S</span>ound<span className="flash2">S</span>tock</strong></span>
                    </span>
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/AllArtists" className="m-1">
                    <button className="btn btn-danger text-light btn-sm m-1 button-nav">View All Artists</button>
                  </Link>
                </div>
                
                <div className="col-md-3">
                  {/* <SignUp className="button-nav" id="signup-nav" /> */}
                </div>
                <div className="col-md-3">
                  {/* <SignIn className="button-nav" id="signin-nav" /> */}
                  {/* <button className="button-nav" id="signin-nav">Sign In</button> */}
                </div>
              </div>
            </div>
          <div className="col-md-3"></div>

        </nav>

      )
    }
  }
}

export default NavSmall;
