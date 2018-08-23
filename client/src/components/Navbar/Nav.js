import React from "react";
// import Search  from "./Search"
// import AllArtistsBtn  from "./AllArtistButton";
import { Link } from "react-router-dom"

const styles = {
  nav: {
    backgroundColor: "#02183a",
    boxShadow: "0px 1px 1px grey",
    borderTop: "3px solid #13a2b8",
    color: "#237c9a"
  },
  input: {
    borderColor: "#237c9a",
    boxShadow: "0 0 0 3px rgba(35,124,154, .25)",
    color: "white"
  },
  input2: {
    borderColor: "#237c9a",
    boxShadow: "0 0 0 3px rgba(35,124,154, .25)",
  },
  infoDark: {
    color: "#027384"
  }
}

export const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark" style={styles.nav} >
    <div className="col-md-3"></div>
    <div className="col-md-6">
      <div className="row">
        <div className="col-md-2">
          <a className="navbar-brand text-info" href="/">
          <span className="text-info h4"><strong> <span style={styles.infoDark}>S</span>ound<span style={styles.infoDark}>S</span>tock</strong></span>
          </a>
        </div>
        <div className="col-md-4">
          <Link to="/AllArtists" className="m-1">
            <button className="btn btn-danger text-light btn-sm m-1 rounded-0 ">View All Artists</button>
          </Link>
        </div>
        <div className="col-md-6">

          <form className="form-inline mr-sm-2 float-right" type="search" placeholder="Search">
            <span>
              <input className="form-control h-25 bg-secondary text-light rounded-0" size="20" type="text" style={styles.input2} id="myInput" />
              <button className="btn btn-sm btn-outline-info bd-highlight rounded-0">Search</button>
            </span>
          </form>
        </div>
      </div>
    </div>
    <div className="col-md-3"></div>

  </nav>
);

export default Nav;
