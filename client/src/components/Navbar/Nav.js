import React from "react";
// import Search  from "./Search"
// import AllArtistsBtn  from "./AllArtistButton";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
// import SignIn from "./SignIn";
import "./nav.css";

export const Nav = () => (
  <div className="nav">
    {/* <div className=""> */}
    <div className="col-md-3 left-space">
      <Link to="/">
        <span className="navbar-brand text-info nav-title">
          <span className="text-info h4"><strong> <span className="flash">S</span>ound<span className="flash2">S</span>tock</strong></span>
        </span>
      </Link>
    </div>
    <div className="col-md-2">
      <Link to="/AllArtists" className="">
        <button className="btn btn-danger text-light btn-sm m-1 button-nav">View All Artists</button>
      </Link>
    </div>
    <div className="col-md-7">
      <div className="row">
        <div className="col-md-12">
          <div className="register rounded float-right">
            <p>Register</p>
            <Link to="../InvestorSignUp">
              <button className="btn btn-info m-3">Investor</button>
            </Link>
            <Link to="../ArtistSignUp">
              <button className="btn btn-info m-3">Artist</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <br />
          <br />
          <br />
          <div className="form-group input-icons float-right">
            <form>
              <span className="">
                <i class="fas fa-user"></i>
                <input type="text" class="form-control-sm login-input m-1" placeholder="Email" aria-label="Recipient's username"></input>
                <i class="fas fa-lock ml-3"></i>
                <input type="password" class="form-control-sm login-input m-1" placeholder="Password" aria-label="Recipient's username"></input>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* </div> */}
  </div>
);

export default Nav;
