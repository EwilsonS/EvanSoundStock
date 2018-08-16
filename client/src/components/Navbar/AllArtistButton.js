import React from "react"
import { BrowserRouter as Link } from "react-router-dom";
import { withRouter } from "react-router-dom";



const AllArtistsBtn = () =>
  <Link to="/AllArtists" className="m-1">
    <button className="btn btn-secondary text-light btn-sm m-1 ">View All Artists</button>
  </Link>

export default withRouter(AllArtistsBtn)