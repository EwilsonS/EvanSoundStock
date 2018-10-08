import React, { Component } from "react";
import API from "../../utils/API";
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

  addToPortfolio = (artistId, image) => {
    // if logged in
    if (localStorage.getItem("id") !== null) {
      // get the user's model from db
      API.getUser(localStorage.getItem("id"))
        .then(res => {
          console.log(res.data)
          console.log(`added to loc storage: "${image}"`)
          console.log(`added to loc storage: "${artistId}"`)
          // if not exists set local storage.
          // for( let i = 0; i < res.data.artists.length; i++){
          //   console.log(res.data.artists[i])
          //   if(res.data.artists[i] === image){
          //     return console.log("Already in db")
          // } else {
          localStorage.setItem("artistImage", image)
          localStorage.setItem("artistId", artistId)
          // }
          // }
          API.updateUserArtist(localStorage.getItem("id"), localStorage.getItem("artistId"))
        })
        .then((res) => {
          // console.log(res.data.artists)
          // console.log(localStorage.getItem("artistImage"))
        })
      // window.location.reload()
    }
    else {
      alert("You must be logged in to access this feature")
    }
  }

  render() {
    return (
      <div className="card-columns">
        {this.state.artists.map(artist => artist.imageLink ? (
          <div className="card mt-2 rounded-0"
            key={artist._id}
          >
            <div className="cardHeader"
            >
              {/* on hover do alert-info */}
              <h5 className="alert alert-dark rounded-0">
                <img
                  className="text-center rounded-circle m-2 image"
                  alt="null"
                  height="125px"
                  width="125px"
                  src={artist.imageLink}
                />
                <button
                  className="btn btn-sm btn-danger right p-1 m-2 d-inline bd-highlight  float-right rounded-0"
                  value={artist._id}
                  onClick={() => this.addToPortfolio(artist._id, artist.imageLink)}
                ><small>Add to portfolio</small></button>
                <br />
                <span className="m-2 blueText"
                >{artist.name}</span>

              </h5>
            </div>
            <div className="card-body"><small>
              <p><span className="blueText"
              >About me:</span> {artist.bio}</p>
              <p><span className="blueText"
              >Investment Opprtunity:</span> {artist.goal} <br />
                I am offering a total of <strong>{artist.availablePercentage} %</strong> for <strong>${artist.totalPrice}.</strong>

              </p>
              <span className="blueText"
              >Media Links: </span><br />
              <a href={artist.mediaLink1} target="_blank">{artist.mediaLink1}</a><br />
              <a href={artist.mediaLink2} target="_blank">{artist.mediaLink2}</a><br />
              <a href={artist.mediaLink3} target="_blank">{artist.mediaLink3}</a><br />
            </small>
            </div>
            <div className="cardFooter"
            >
            </div>
          </div>
        ) : (null))}
      </div>
    )
  }
}

export default MiniCard;