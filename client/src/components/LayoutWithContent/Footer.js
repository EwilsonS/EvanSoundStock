import React from "react";

const Footer = () => (
  <div>
    <div className="row bg-dark text-light m-0 pt-3">
      <div className="col-md-4"></div>
      <div className="col-md-1 ">
        {/* <a href="" className="text-info">Facebook</a><br /> */}
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/soundstock/" className="text-info">LinkedIn</a><br />
        <a target="_blank" rel="noopener noreferrer" href="https://www.ascap.com/" className="text-info">Ascap</a><br />
        <a target="_blank" rel="noopener noreferrer" href="https://www.bmi.com/" className="text-info">BMI</a><br />
        <a target="_blank" rel="noopener noreferrer" href="https://www.sesac.com/#/" className="text-info">Sesac</a><br />
        <a target="_blank" rel="noopener noreferrer" href="https://www.paypal.com/us/webapps/mpp/home" className="text-info">PayPal</a><br />

      </div>
      <div className="col-md-1 ">
        <a target="_blank" rel="noopener noreferrer" href="https://loc.gov/" className="text-info">Lib of Congress</a><br />
        <a target="_blank" rel="noopener noreferrer" href="" className="text-info">Support</a><br />
      </div>
      <div className="col-md-1 ">
        <a target="_blank" rel="noopener noreferrer" href="" className="text-info">FAQs</a><br />
        {/* <a target="_blank" rel="noopener noreferrer" href="" className="text-info">Partners</a><br /> */}
        {/* <a target="_blank" rel="noopener noreferrer" href="" className="text-info">Legal</a><br /> */}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/EwilsonS/EvanSoundStock" className="text-info">Development</a><br />
        {/* <a target="_blank" rel="noopener noreferrer" href="" className="text-info">Misson</a><br /> */}

      </div>
      <div className="col-md-1 ">
        <a target="_blank" rel="noopener noreferrer" href="" className="text-info">About</a><br />
        <a target="_blank" rel="noopener noreferrer" href="" className="text-info">Contact</a><br />
      </div>
      <div className="col-md-4"></div>

    </div>

    <div className="row bg-dark text-light m-0 pt-3">

      <div className="col-md-3"></div>
      <div className="col-md-6 ">
        <br /><br /><br /><br />
        <p className="text-center text-info">SoundStock 2018 by Evan Wilson</p>
      </div>
      <div className="col-md-3"></div>

    </div>
  </div>
)

export default Footer;