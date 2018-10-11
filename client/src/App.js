import React, { Component } from "react";
// import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
// import logo from "./logo.svg";
import "./App.css";
import HomeContainer from "./components/HomeContainer"
import ArtistSignUp from "./components/Pages/ArtistSignUp"
import InvestorSignUp from "./components/Pages/InvestorSignUp"
// import ArtistProfile from "./components/Pages/ArtistProfile"
import UserProfile from "./components/Pages/UserProfile"
import { AllArtists } from "./components/Pages/AllArtists";
import { Admin } from "./components/Pages/Admin";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route 
          exact path="/" 
          component={HomeContainer} 
          />
          <Route 
          exact path="/artistSignUp" 
          component={ArtistSignUp} 
          />
          <Route 
          exact path="/investorSignUp" 
          component={InvestorSignUp} 
          />
          <Route 
          exact path="/api/users/:id"
          component={UserProfile} 
          />
          <Route 
          exact path="/allArtists" 
          component={AllArtists}
          />
           <Route 
          exact path="/admin" 
          component={Admin}
          />

        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
