import React from "react";
// import Search  from "./Search"
// import AllArtistsBtn  from "./AllArtistButton";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import "./navsmall.css";

export const Nav = () => (
  <nav className="navsmall">
    <div className="col-md-3 left-space"></div>
    <div className="col-md-6">
      <div className="row tr">
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
          <SignUp className="button-nav"  id="signup-nav"/>
          <SignIn className="button-nav"  id="signin-nav"/>
          {/* <button className="button-nav" id="signin-nav">Sign In</button> */}
        </div>
      </div>
    </div>
    <div className="col-md-3"></div>

  </nav>
);

export default Nav;
