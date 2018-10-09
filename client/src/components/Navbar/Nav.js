import React from "react";
// import Search  from "./Search"
// import AllArtistsBtn  from "./AllArtistButton";
import { Link } from "react-router-dom";
import "./nav.css";

export const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark nav">
    <div className="col-md-3 left-space"></div>
    <div className="col-md-6">
      <div className="row tr">
        <div className="col-md-3">
          <Link to="/">
            <span className="navbar-brand text-info nav-title">
              <span className="text-info h4"><strong> <span className="flash">S</span>ound<span className="flash2">S</span>tock</strong></span>
            </span>
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/AllArtists" className="m-1">
            <button className="btn btn-danger text-light btn-sm m-1 rounded-0 ">View All Artists</button>
          </Link>
        </div>
        <div className="col-md-5">
          <form className="form-inline mr-sm-2 float-right" id="search" type="search" placeholder="Search">
            <span className="float-right">
              <input className="form-control h-25 bg-secondary text-light rounded-0 input2" type="text" id="myInput" />
              <button className="btn btn-sm btn-outline-info bd-highlight rounded-0 float-right">Search</button>
            </span>
          </form>
        </div>
      </div>
    </div>
    <div className="col-md-3"></div>

  </nav>
);

export default Nav;
