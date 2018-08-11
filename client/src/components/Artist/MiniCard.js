import React, { Component } from "react";
import API from "../../utils/API";

const styles = {
  cardHeader: {
    // backgroundColor: "#02183a",
    borderTop: "3px solid #13a2b8",
    color: "#02183a"
  },
  cardFooter: {
    backgroundColor: "#02183a",
    borderTop: "3px solid #13a2b8",
    color: "#237c9a"
  },
  input: {
    borderColor: "#237c9a",
    boxShadow: "0 0 0 3px rgba(35,124,154, .25)",
    color: "white"
  }
}

class MiniCard extends Component {

  state = {
    artists: [],
    email: "",
    name: "",
    imageLink: "",
    songLink: "",
    bio: "",
    goal: ""
  };

  componentDidMount() {
    this.loadArtists();
  }

  loadArtists = () => {
    API.getArtists()
      .then(res =>
        this.setState({
          artists: res.data}))
      .catch(err => console.log(err));
  };

  render() {
    return (


      <div className="card mt-5 rounded">
      <div className="card-header bg-secondary" style={styles.cardHeader}>
        <h3>
          {this.state.name}
        </h3>
      </div>
      <div className="card-body">
        <img className="text-center rounded-circle" height="250px" width="250px" src={this.state.imageLink} />
        <br />
        <br />
        <h5>About me: {this.state.bio}</h5>
        <br />
        <p>Investment Opprtunity: {this.state.goal}</p>
        <br/>
        <p>Media Links: <a href={this.state.songLink}>{this.state.songLink}</a></p>
      </div>
      <div className="card-footer" style={styles.cardFooter}>
      </div>
    </div>
    )
  }

}

export default MiniCard;