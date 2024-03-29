import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./miniCard.css"



class MiniCard extends Component {

  state = {
    artists: [],
    email: "",
    name: "",
    imageLink: "",
    mediaLink1: "",
    mediaLink2: "",
    mediaLink3: "",
    bio: "",
    goal: "",
    availablePercentage: null,
    totalPrice: null,
    _id: "",
    image: "",
    key: ""
  };

  componentDidMount() {
    this.loadArtists();
  }

  loadArtists = () => {
    API.getUsers()
      .then(res =>
        this.setState({
          artists: res.data
        }))
      .then(() => {
      })
      .catch(err => console.log(err));
  };

  reload = () =>{
    window.location.reload("/")
   }

  addToPortfolio = (artistId, image) => {
    if (localStorage.getItem("id") !== null) {
      API.getUser(localStorage.getItem("id"))
        .then(res => {
          localStorage.setItem("artistImage", image)
          localStorage.setItem("artistId", artistId)
          API.updateUserArtist(localStorage.getItem("id"), localStorage.getItem("artistId"))
        })
      window.location.reload("/")
    }
    else {
      alert("You must be logged in to access this feature")
    }
  }

  render() {
    return (
      <div className="card-columns">
        {this.state.artists.map(artist => (artist.account === "artist") ? (
          <div className="card card-mini mt-2 rounded-0"
            key={artist._id}
          >
            <div className="cardHeader">
              <h5 className="rounded-0 mb-0">
                <Link to={`/api/users/${artist._id}`}>
                  <img
                  className="text-center rounded-circle m-2 image"
                  alt="null"
                  src={artist.imageLink ? artist.imageLink :  "https://i2.wp.com/crimsonems.org/wp-content/uploads/2017/10/profile-placeholder.gif?fit=250%2C250&ssl=1"}
                />
                </Link>
                <button
                  className="btn btn-sm btn-danger right p-1 m-2 d-inline bd-highlight float-right rounded-0"
                  value={artist._id}
                  onClick={() => this.addToPortfolio(artist._id, artist.imageLink)}
                ><small>Add to portfolio</small></button>
                <br />
                <span className="m-2 blueText"
                >{artist.name}</span>

              </h5>
            </div>
            <div className="card-body cardBody"><small>
              <p className="mb-0"><span className="blueText"
              >About me:</span> {artist.bio}</p>
              <p className="investment"><span className="blueText"
              >Investment Opprtunity:</span> {artist.goal} <br /><br />
                <span className="percent">
                  {artist.name} is offering a total of <strong>{artist.availablePercentage} %</strong> for <strong>${artist.totalPrice}.</strong>
                </span>
              </p>
              <span className="blueText links"
              >Media Links: </span><br />
              <div className="links2">
                <a href={artist.mediaLink1} target="_blank">{artist.mediaLink1}</a><br />
                <a href={artist.mediaLink2} target="_blank">{artist.mediaLink2}</a><br />
                <a href={artist.mediaLink3} target="_blank">{artist.mediaLink3}</a><br />
              </div>
            </small>
            </div>
            <div className="cardFooter">
            </div>
          </div>
        ) : (null))}
      </div>
    )
  }
}

export default MiniCard;