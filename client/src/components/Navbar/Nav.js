import React from "react";
// import Search  from "./Search"
// import AllArtistsBtn  from "./AllArtistButton";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
// import SignIn from "./SignIn";
import "./nav.css";

export const Nav = () => (
  <div className="row mx-0 px-0">
    <nav className="nav">
      <div className="col-md-3 left-space">
        <Link to="/">
          <span className="navbar-brand text-info nav-title">
            <span className="text-info h4"><strong> <span className="flash">S</span>ound<span className="flash2">S</span>tock</strong></span>
          </span>
        </Link>
      </div>
      <div className="col-md-3 ">
        <Link to="/AllArtists" className="">
          <button className="btn btn-danger text-light btn-sm m-1 button-nav">View All Artists</button>
        </Link>

      </div>
      <div className="col-md-6">
        {/* <div className="nav-item dropdown p-0 float-right">
          <button className="btn btn-info btn-sm nav-link dropdown-toggle signup-nav" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false">Sign Up</button>
          <div className="dropdown-menu">
            <br />
            <Link to="/artistSignUp" className="m-1">
              <button className="btn btn-info btn-sm m-1 rounded-0 ">Artist Sign Up</button>
            </Link>
            <Link to="/investorSignUp" className="m-1">
              <button className="btn btn-info btn-sm m-1 rounded-0">Investor Sign Up</button>
            </Link>
          </div>
        </div> */}
        <div className="row float-right">
          <div className="register">

          </div>
        </div>
        <div className="row input-icons">
          <div className="form-group">
            <form >
              <span className="">
                <i class="fas fa-user"></i>
                <input type="text" class="form-control-sm login-input m-1" placeholder="Email" aria-label="Recipient's username"></input>
                <i class="fas fa-lock ml-3"></i>
                <input type="text" class="form-control-sm login-input m-1" placeholder="Password" aria-label="Recipient's username"></input>
              </span>
            </form>
          </div>
        </div>
      </div>

    </nav>
  </div>
);

export default Nav;
