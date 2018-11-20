import React from "react";
// import Search  from "./Search"
// import AllArtistsBtn  from "./AllArtistButton";
import { Link } from "react-router-dom";
// import SignUp from "./SignUp";
// import SignIn from "./SignIn";
import "./nav.css";

export const Nav = () => (
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
                <i class="fas fa-user" />
                <input
                  type="text"
                  className="form-control-sm login-input m-1"
                  placeholder="Email"
                />
                <i class="fas fa-lock ml-3" />
                <input
                  type="password"
                  className="form-control-sm login-input m-1"
                  placeholder="Password"
                />
                <button
                  type="submit"
                  className="btn btn-sm login-input m-2"
                  placeholder="Go"
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
);

export default Nav;
