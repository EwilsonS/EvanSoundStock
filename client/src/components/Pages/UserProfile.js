import React, { Component } from "react";
import API from "../../utils/API";
import { LoginDashboard } from "../Artist/LoginDashboard";
import { Container, Row, Col } from "../Grid";
import NavSmall from "../Navbar/NavSmall";
import Calculator from "../Artist/Calculator"
import { Link } from "react-router-dom";

import "./userProfile.css"
class UserProfile extends Component {

  state = {
    user: [],
    artists: [],
    artistsInfo: [],
    verify: [],
    name: "",
    email: "",
    password: "",
    online: false,
    id: "",
    valid: true,
    key: "",
    reform: []
  };

  componentDidMount() {
    if (localStorage.getItem("id") !== null) {
      this.setState({
        online: localStorage.getItem("online"),
        id: localStorage.getItem("id"),
        email: localStorage.getItem("email"),
        name: localStorage.getItem("name"),
        key: localStorage.getItem("artistId"),
        artists: (JSON.parse(localStorage.getItem("artists")))
      })
      this.viewPortfolio();
    } else {
      this.setState({
        online: false,
        id: "",
        email: ""
      })
    }
    this.loadUser()
  };

  loadUser = () => {
    API.getUser(this.props.match.params.id)
      .then(res => {
        console.log(res.data)
        this.setState({ 
          user: res.data,
          artists:res.data.artists
        })
      })
      .catch(err => console.log(err));
  }

  viewPortfolio = () => {
    API.getUser(localStorage.getItem("id"))
      .then(res => {
        this.setState({ artists: res.data.artists })
        console.log(this.state.artists)
      })
      .then(() => {
        this.buildPortfolio()
      })
  }

  buildPortfolio = () => {
    let elementArr = []
    this.state.artists.forEach(element => {
      API.getUser(element)
        .then((res) => {
          elementArr.push(res.data)
          this.setState({
            artistsInfo: elementArr
          })
        })
    })
  }

  deleteArtist = (deleted) =>{
    API.pullUserArtist(localStorage.getItem("id"), deleted)
    .then(() =>{
      this.reload()
    })
  }

  deleteAccount = (del) =>{
    API.deleteAccount(del)
    .then(()=>{
      localStorage.clear()
      window.location.replace("/")
    })
  }

  reload = (id) =>{
    window.location.reload("/"+id)
   }

  render() {
    if(localStorage.getItem("id") !== this.props.match.params.id){
      return (
        <div>
          <NavSmall />
          <Container fluid>
            <Row>
              <Col size="md-1" />
              <Col size="md-2">
                <Calculator />
              </Col>
              <Col size="md-6">
                <div className="card mt-3 rounded-0" id="profileCard">
                  <div className="card-header topPic rounded-0">
                    <img
                      className="rounded-circle pic"
                      src={this.state.user.imageLink ? this.state.user.imageLink :  "https://i2.wp.com/crimsonems.org/wp-content/uploads/2017/10/profile-placeholder.gif?fit=250%2C250&ssl=1"}
                      alt="" />
                    <span className="nameText">{this.state.user.name}</span>
                  </div>
                  <div className="card-body">
                    <p className="bodyText">
                      {this.state.user.bio}
                      <br />
                      <br />
                      Reason: {this.state.user.goal}
                      <br />
                      <br />
                      Seeking: <strong>${this.state.user.totalPrice}</strong>
                      <br />
                      For: <strong>{this.state.user.availablePercentage}% </strong>
                    </p>
                  </div>
                </div>
              </Col>
              <Col size="md-2">
                <LoginDashboard />
              </Col>
              <Col size="md-1" />
            </Row>
          </Container>
        </div>
      )
    }else{
      return (
        <div>
          <NavSmall />
          <Container fluid>
            <Row>
              <Col size="md-1" />
              <Col size="md-2">
                <Calculator />
              </Col>
              <Col size="md-6">
                <div className="card mt-3 rounded-0">
                  <div className="card-header topPic rounded-0">
                    <img
                      className="rounded-circle pic"
                      src={this.state.imageLink ? this.state.imageLink :  "https://i2.wp.com/crimsonems.org/wp-content/uploads/2017/10/profile-placeholder.gif?fit=250%2C250&ssl=1"}
                      alt="" />
                    <span className="nameText">{this.state.name}</span>
                    <button className="btn btn-sm float-right p-0" onClick={() => this.deleteAccount(this.state.id)}>Delete Account</button>

                  </div>
                  <div className="card-body">
                  <br />
                  <br />
                  <br />
                  <br />

                    <h3>Your Portfolio</h3>
                    
                    {this.state.artistsInfo.map(art => art.account === 'artist' ? (
                    <div
                      className="portfolio-card-profile"
                      key={art._id}
                    >
                      <span 
                         className="btn btn-danger btn-sm float-right rmv"
                         onClick={() => this.deleteArtist(art._id)}
                         >
                         Remove
                         </span>
                      <Link
                        onClick={() => this.reload(art._id)}
                        className=""
                        to={`/api/users/${art._id}`}>
                            <span>

                          <img
                            className="rounded-circle m-2 pic-profile-map"
                            src={art.imageLink ? art.imageLink :  "https://i2.wp.com/crimsonems.org/wp-content/uploads/2017/10/profile-placeholder.gif?fit=250%2C250&ssl=1"}
                            alt="artist"
                            />
                          <span className="text-light"><span className="h5">{art.name} | </span>${art.totalPrice} for {art.availablePercentage}%</span>
                        </span>
                      </Link>
                    </div>
                  ) : (null)
                  )}
                  </div>
                </div>
              </Col>
              <Col size="md-2">
                <LoginDashboard />
              </Col>
              <Col size="md-1" />
            </Row>
          </Container>

        </div>
      )
  
    }

  }
  // shows investors choices
}

export default UserProfile;