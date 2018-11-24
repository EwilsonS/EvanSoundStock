import React from "react";
import "../Pages/howItWorks.css"

const HowItWorks = () => (

  <div className="row my-0 row-bg">
    <div className="col-md-2"></div>
      <div className="col-md-8 p-0">
        <div className="mb-5 my-1 card-group">
          <div className="my-2 px-0 mx-0 rounded-0 card text-white main-content">
            <div className="card-header"><strong>Step 1</strong></div>
            <div className="card-body p-2">
              <p className="card-text"> Sign up as either an Artist or Investor.</p>
            </div>
          </div>
          <div className="my-2 px-0 mx-0 rounded-0 card text-white main-content">
            <div className="card-header"><strong>Step 2</strong></div>
            <div className="card-body p-2">
              <p className="card-text"><strong>Artist</strong><br /> Once you've COMPLETELY filled out all profile info during the sign up phase, your job is done. You will have, described your art, provided links and set your terms for partnership with investors, now you can get back to work.</p>
              <p className="card-text"><strong>Investor</strong><br /> After you sign up browse the "All Artists" page or search for a particular style of content</p>
            </div>
          </div>
          <div className="my-2 px-0 mx-0 rounded-0 card text-white main-content">
            <div className="card-header"><strong>Step 3</strong></div>
            <div className="card-body p-2">
              <p className="card-text">Behind the scenes <strong>Sound Stock</strong> will publish the artists' song through <strong><u><a href="http://ascap.com" className="text-light">ASCAP</a></u></strong> and distribute uploaded works to all major digital platforms.</p>
            </div>
          </div>
          <div className="my-2 px-0 mx-0 rounded-0 card text-white main-content">
            <div className="card-header"><strong>Step 4</strong></div>
            <div className="card-body p-2">
              <p className="card-text"><strong>Investor</strong><br />
                You may now add artists to your portfolio. Using the integrated calculator, input how much you would like to invest and the available percentage/price(set by artist) to see your ownership percentage.</p>
            </div>
          </div>
          <div className="my-2 px-0 mx-0 rounded-0 card text-white main-content">
            <div className="card-header"><strong>Step 5</strong></div>
            <div className="card-body p-2">
              <p className="card-text">All that's left to do is submit payment and watch your royalties accrue!</p>
            </div>
          </div>
        </div>
      </div>
    <div className="col-md-2"></div>
  </div>
)

export default HowItWorks;