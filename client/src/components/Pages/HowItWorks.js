import React from "react";

const styles = {
  cardSize: {
    maxWidth: "18rem"
  }
}

const HowItWorks = () => (

  <div className="row my-0 alert bg-alert-dark">
    <div className="col-md-1"></div>
    <div className="col-md-10 text-center">
      <div className="card-group ml-5 mb-5 mt-0">
        <div className="card text-white bg-info" style={styles.cardSize}>
          <div className="card-header"><strong>Step 1</strong></div>
          <div className="card-body">
            <p className="card-text"> Sign up as either an Artist or Investor.</p>
          </div>
        </div>
        <div className="card text-white bg-info" style={styles.cardSize}>
          <div className="card-header"><strong>Step 2</strong></div>
          <div className="card-body">
            <p className="card-text"><strong>Artist</strong><br /> Once you've COMPLETELY filled out all profile info during the sign up phase, you're job is done. You will have, described your art, provided links and set your terms for partnership with investors, now you can get back to work.</p>
            <p className="card-text"><strong>Investor</strong><br /> After you sign up browse the "All Artists" page or search for a particular style of content</p>
          </div>
        </div>
        <div className="card text-white bg-info" style={styles.cardSize}>
          <div className="card-header"><strong>Step 3</strong></div>
          <div className="card-body">
            <p className="card-text">Behind the scenes <strong>Sound Stock</strong> publish the artists' song through <strong><u><a href="http://ascap.com" className="text-light">ASCAP</a></u></strong> and distribute uploaded works to all major digital platforms.</p>
          </div>
        </div>
        <div className="card text-white bg-info" style={styles.cardSize}>
          <div className="card-header"><strong>Step 4</strong></div>
          <div className="card-body">
            <p className="card-text"><strong>Investor</strong><br />
              You may now add artists to your portfolio. Using the integrated calculator, input how much you would like to invest and the available percentage/price(set by artist) to see your ownership percentage.</p>
          </div>
        </div>
        <div className="card text-white bg-info" style={styles.cardSize}>
          <div className="card-header"><strong>Step 5</strong></div>
          <div className="card-body">
            <p className="card-text">All that's left to do is submit payment and watch your royalties accrue!</p>
          </div>
        </div>
      </div>
        <br/><br/><br/>
    </div>
    <div className="col-md-1"></div>
    <br/><br/><br/>
  </div>
)

export default HowItWorks;