import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


export const AllArtistsBtn= () =>
            <Link to="/AllArtists" className="m-1">
            <button className="btn btn-secondary text-light btn-sm m-1 ">View All Artists</button>
            </Link>