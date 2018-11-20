import React from "react";

const styles = {
  padding: {
    paddingTop: 40,
    marginLeft: 10
  },
  card: {
    marginTop: 50
  },

  invest: {
    paddingLeft: 140,
    paddingTop: 30
  },
  img: {
    height: "75px",
    width: "75px"
  }
};
function FeaturedArtists(props) {
  // class FeaturedArtists extends Component {
  // constructor(props){
  //   super(props)
  //    this.state = {
  //     ...props
  //    }
  // };
  return (

    <div className="row alert alert-dark rounded-0 text-light">
      <div className="col-md-12 ">
        <br /><br />
        <p className="h4 text-dark text-center">Featured Artists</p>
        <br />
        <div>
          {props.artists.map(artist => (artist.name === "Wilson Wright") ? (
            <div className="card my-3" key={artist._id} style={styles.card}>
              <h5 className="card-header text-info">{artist.name}
              </h5>
              <div className="card-body">
                <div className="">
                  <div className="">
                    <img className="rounded-circle float-left" alt="null" style={styles.img} src={artist.imageLink} />
                    <div className="float-left">
                      <p className="text-dark float-left">{artist.bio}</p>
                      <p className="text-info">{artist.goal}
                        <br /> Seeking: <strong>${artist.totalPrice}</strong>
                        <br /> For: <strong>{artist.availablePercentage}% </strong> of total album sales
                        </p>
                    </div>
                    <div className="">
                      <button
                        className="btn btn-sm btn-danger right p-1 m-2 d-inline bd-highlight float-right rounded-0"
                        value={artist._id}
                        onClick={() => this.addToPortfolio(artist._id, artist.imageLink)}
                      >Add to portfolio</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>) : (null)
          )}
        </div>
        <br /><br />
      </div>
    </div>
  )
}

export default FeaturedArtists;