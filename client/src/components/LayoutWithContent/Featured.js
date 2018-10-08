import React, { Component } from "react";
// import CardDiv from "../Artist/CardDiv";
import API from "../../utils/API";
// import Progress from "../Artist/Progress";
import InvestBtn from "../Artist/Invest";
import { withRouter } from "react-router-dom";

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
class FeaturedArtists extends Component {

  state = {
    artists: [],
    name: "",
    imageLink: "",
    songLink: "",
    bio: "",
    goal: "",
    key: ""
  };

  addToPortfolio = (artistId, image) => {
    // if logged in
    if (localStorage.getItem("id") !== null) {
      // get the user's model from db
      API.getUser(localStorage.getItem("id"))
        .then(res => {
          console.log(res.data)
          console.log(`added to loc storage: "${image}"`)
          console.log(`added to loc storage: "${artistId}"`)

          localStorage.setItem("artistImage", image)
          localStorage.setItem("artistId", artistId)

          API.updateUserArtist(localStorage.getItem("id"), localStorage.getItem("artistId"))
        })
    }
    else {
      alert("You must be logged in to access this feature")
    }
  }

  componentDidMount() {
    this.loadArtist();
  }

  loadArtist = () => {
    API.getUsers()
      .then(res => {
        // console.log(res)
        this.setState({ artists: res.data })
      })

      .catch(err => console.log(err));

  };

  render() {
    return (

      <div className="row alert alert-dark rounded-0 text-light">

        <div className="col-md-12 ">
          <br /><br />
          <p className="h4 text-dark text-center">Featured Artists</p>
          <br />

          <div>
            {this.state.artists.map(artist => (artist.name === "Wilson Wright") ? (
              <div className="card my-3" key={artist._id} style={styles.card}>
                <h5 className="card-header text-info">{artist.name}
                </h5>
                <div className="card-body">
                  <div className="">
                    <div className="">
                      <img className="rounded-circle float-left" alt="null" style={styles.img} src={artist.imageLink} />
                      <div className="float-left">
                        <p className="text-dark float-left">{artist.bio}</p>
                        <hr />
                        <p className="text-info">{artist.goal}
                          <br /> Seeking: <strong>${artist.totalPrice}</strong>
                          <br /> For: <strong>{artist.availablePercentage}% </strong> of total album sales
                        </p>

                      </div>
                      <div className="">
                        {/* <InvestBtn /> */}
                        <button
                          className="btn btn-sm btn-danger right p-1 m-2 d-inline bd-highlight float-right rounded-0"
                          value={artist._id}
                          onClick={() => this.addToPortfolio(artist._id, artist.imageLink)}
                        >Add to portfolio</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <Progress /> */}
              </div>) : (null)
            )}
          </div>
          <br /><br />
        </div>
      </div>
    )
  }
}

export default withRouter(FeaturedArtists);