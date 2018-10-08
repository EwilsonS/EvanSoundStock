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
    key:""
  };

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
            {this.state.artists.map(artist => (artist.name=== "Wilson Wright") ? (
              <div className="card my-3" key={artist._id} style={styles.card}>
                <h5 className="card-header text-info"  >{artist.name}
                </h5>
                <div className="card-body">
                  <div className="">
                    <div className="">
                      <img className="rounded-circle float-left" alt="null" style={styles.img} src={artist.imageLink} />
                      <div className="float-left">
                        <p className="text-dark float-left">{artist.bio}</p>
                        <hr/>
                        <p className="text-info">{artist.goal}</p>
                      </div>
                      <div className="float-right">
                        <InvestBtn />
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