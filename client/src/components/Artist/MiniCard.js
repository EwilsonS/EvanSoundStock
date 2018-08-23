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
    _id: ""
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
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="card-columns">
        {this.state.artists.map(artist => artist.imageLink ? (
          <div className="card mt-2 rounded-0"
          // style={styles.card}
          >
            <div className="cardHeader"
            // style={styles.cardHeader}
            >
              {/* on hover do alert-info */}
              <h5 className="alert alert-dark rounded-0">
                <img
                  className="text-center rounded-circle m-2 image"
                  alt="null"
                  height="125px"
                  width="125px"
                  src={artist.imageLink}
                // style={styles.image}
                />
                <button className="btn btn-sm btn-danger right p-1 m-2 d-inline bd-highlight  float-right rounded-0"><small>Add to portfolio</small></button>
                <br />
                <span className="m-2 blueText"
                // style={styles.blueText}
                >{artist.name}</span>

              </h5>
            </div>
            <div className="card-body"><small>
              <p><span className="blueText"
              // style={styles.blueText}
              >About me:</span> {artist.bio}</p>
              <p><span className="blueText"
              // style={styles.blueText}
              >Investment Opprtunity:</span> {artist.goal} <br />
                I am offering a total of <strong>{this.state.availablePercentage} %</strong> for <strong>{this.state.totalPrice}.</strong>

              </p>
              <span className="blueText"
              // style={styles.blueText}
              >Media Links: </span><br />
              <a href={artist.mediaLink1} target="_blank">{artist.mediaLink1}</a><br />
              <a href={artist.mediaLink2} target="_blank">{artist.mediaLink2}</a><br />
              <a href={artist.mediaLink3} target="_blank">{artist.mediaLink3}</a><br />
            </small>
            </div>
            <div className="cardFooter"
            // style={styles.cardFooter}
            >
            </div>
          </div>
        ) : (null))}
      </div>
    )
  }
}

export default MiniCard;