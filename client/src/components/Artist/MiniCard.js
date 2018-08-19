import React, { Component } from "react";
import API from "../../utils/API";

const styles = {
  cardHeader: {
    backgroundColor: "white",
    // borderTop: "8px solid #13a2b8",
    color: "#02183a"
  },
  cardFooter: {
    backgroundColor: "white",
    // borderTop: "5px solid #13a2b8",
    color: "#237c9a"
  },
  input: {
    borderColor: "#237c9a",
    boxShadow: "0 0  3px rgba(35,124,154, .25)",
    color: "white"
  },
  card: {
    boxShadow: "3px 4px 8px 0px rgba(50, 50, 50, 0.20)"
  },
  image:{
    border: "7px solid white"
  },
  blueText:{
    color: "#02183a",
    fontWeight: "bold"
  }
}

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
    totalPrice:null,
    _id:""
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
          <div className="card mt-2 rounded-0" style={styles.card}>
            <div className="" style={styles.cardHeader}>
            {/* on hover do alert-info */}
              <h3 className="alert alert-dark rounded-0">
                <img 
                className="text-center rounded-circle m-2" 
                alt="null" 
                height="125px" 
                width="125px" 
                src={artist.imageLink} 
                style={styles.image}/>
                <button className="btn btn-sm btn-danger right p-1 m-2 d-inline bd-highlight  float-right rounded-0"><small>Add to portfolio</small></button>
                <br/>
                <span className="m-2" style={styles.blueText}>{artist.name}</span>
                
              </h3>
            </div>
            <div className="card-body"><small>
              <p><span style={styles.blueText}>About me:</span> {artist.bio}</p>
              <p><span style={styles.blueText}>Investment Opprtunity:</span> {artist.goal} <br/>
              I am offering a total of <strong>{this.state.availablePercentage} %</strong> for <strong>{this.state.totalPrice}.</strong>
              
              </p>
              <span style={styles.blueText}>Media Links: </span><br/>
              <a href={artist.mediaLink1} target="_blank">{artist.mediaLink1}</a><br/>
               <a href={artist.mediaLink2} target="_blank">{artist.mediaLink2}</a><br/>
               <a href={artist.mediaLink3} target="_blank">{artist.mediaLink3}</a><br/>
            </small>
            </div>
            <div className="" style={styles.cardFooter}>
            </div>
          </div>
        ) : (null))}
      </div>
    )
  }
}

export default MiniCard;