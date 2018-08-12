import React from "react";
import { Row, Col } from "../Grid/"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HowItWorks from "../Pages/HowItWorks"

const styles = {
  gold: {
    color: "#e2bb1b"
  },
  infoDark: {
    color: "#027384"
  }

}

const WelcomeDiv = props => (

  <div className="row alert alert-dark m-0">
    <div className="col-md-3" />
    <div className="col-md-6 text-center text-dark">
      <br />
      <h2>Welcome to <span className="text-info h1"><strong> <span style={styles.infoDark}>S</span>ound<span style={styles.infoDark}>S</span>tock</strong></span></h2>
      <br />
      <p className="h5">
        <span className="text-info font-weight-bold">Sound Stock</span> is the meeting place for creatives and investors to connect. We merge <span className="font-weight-bold" style={styles.infoDark}>crowdfunding</span> with <span className="font-weight-bold" style={styles.infoDark}>stock aquisition</span>, in the form of shared royalties. <span className="text-info font-weight-bold">Sound Stock</span> Publishing will monitor, collect and distribute royalties to artists and investors based on their contract.
      </p>
      <br />
      <br/>
      <h2 className="text-center" style={styles.infoDark}>Here's How It Works...</h2>
      {/* use below as own component to open on same page  */}
      {/* <Link to={`/howitworks`} role="button">
        <a className="text-danger">Click here to learn more!</a>
      </Link>
      <Route path={`/howitworks`} component={HowItWorks} /> */}

    </div>
    <div className="col-md-3" />

  </div>
);

export default WelcomeDiv;