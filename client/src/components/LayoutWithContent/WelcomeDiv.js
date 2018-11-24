import React from "react";

const styles = {
  gold: {
    color: "#e2bb1b"
  },
  infoDark: {
    color: "#027384"
  }

}

const WelcomeDiv = props => (

  <div className="row my-2" >
    <div className="col-md-2"></div>
      <div className="col-md-8 text-center text-dark">
        <br />
        <h5>Welcome to <span className="text-info h4"><strong> <span style={styles.infoDark}>S</span>ound<span style={styles.infoDark}>S</span>tock</strong></span></h5>
        <br />
        <p className="h6">
          <span className="text-info font-weight-bold">Sound Stock</span> is the meeting place for creatives and investors to connect. We merge <span className="font-weight-bold" style={styles.infoDark}>crowdfunding</span> with <span className="font-weight-bold" style={styles.infoDark}>stock acquisition</span>, in the form of shared royalties. <span className="text-info font-weight-bold">Sound Stock</span> Publishing will monitor, collect and distribute royalties from digital sales to artists and investors based on their contract.
        </p>
        <br />
      </div>
    <div className="col-md-2"></div>
  </div>
);

export default WelcomeDiv;