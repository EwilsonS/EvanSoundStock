import React from "react";
import Search  from "./Search"
import SignUp from "./SignUp"
import AllArtistsBtn  from "./AllArtistButton";
import SignIn from "./SignIn"
import {Link} from "react-router-dom"

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
  }
}

export const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark" style={styles.nav} >
    <a className="navbar-brand text-info" href="/">
      <strong> Sound Stock</strong>
    </a>
    
    <SignIn />
    <SignUp />
    <Link to="/allArtists">
    <AllArtistsBtn/>
    </Link>
    
    <Search/>
  </nav>
);

export default Nav;
