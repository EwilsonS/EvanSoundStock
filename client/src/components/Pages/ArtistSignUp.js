import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import Nav from "../Navbar/Nav";
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
  image: {
    border: "7px solid white"
  },
  blueText: {
    color: "#02183a",
    fontWeight: "bold"
  }
}
export class ArtistSignUp extends Component {
  state = {
    email: "",
    password: "",
    confirm: "",
    name: "",
    imageLink: "",
    mediaLink1: "",
    mediaLink2: "",
    mediaLink3: "",
    bio: "",
    goal: "",
    genre: "",
    availablePercentage: 0,
    totalPrice: 0,
    isDeleted: false,
    account: "artist",
    pro:"",
    ipi:""

  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if(this.state.password !== this.state.confirm){
      return;
    } 
    API.saveUser({
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      imageLink: this.state.imageLink,
      bio: this.state.bio,
      goal: this.state.goal,
      isDeleted: this.state.isDeleted,
      availablePercentage: this.state.availablePercentage,
      totalPrice: this.state.totalPrice,
      mediaLink1: this.state.mediaLink1,
      mediaLink2: this.state.mediaLink2,
      mediaLink3: this.state.mediaLink3,
      genre: this.state.genre,
      account: this.state.account


    })
      .then(res => {
        console.log(res)
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
  };

  render() {
    return (
      <div>
        <Nav />
        <Container fluid>
          <Row>
            <Col size="md-3" />
            <Col size="md-3">
              <h2 className="text-info m-3">
                Artist Sign Up
              </h2>
              <form>
                <div className="form-group" >
                  <input
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    type="text"
                    className="form-control rounded-0"
                    aria-describedby="emailHelp"
                    placeholder="Artist Name"
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <input
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    type="email"
                    className="form-control rounded-0"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    name="email"
                  />
                </div>

                <div className="form-group">
                  <input
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    type="password"
                    className="form-control rounded-0"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <div className="form-group">
                  {/* use ternary to show green or red alert for validation */}
                  <input
                    onChange={this.handleInputChange}
                    type="password"
                    className="form-control rounded-0"
                    placeholder="Confirm Password"
                    name="confirm"

                  />
                </div>
                <div className="form-group">
                  <input
                    value={this.state.imageLink}
                    onChange={this.handleInputChange}
                    type="text"
                    className="form-control rounded-0"
                    placeholder="Image URL"
                    name="imageLink"
                  />
                </div>
                <div className="form-group">
                  <input
                    value={this.state.mediaLink1}
                    onChange={this.handleInputChange}
                    type="text"
                    className="form-control rounded-0"
                    placeholder="Media URL"
                    name="mediaLink1"
                  />
                </div>
                <div className="form-group">
                  <input
                    value={this.state.mediaLink2}
                    onChange={this.handleInputChange}
                    type="text"
                    className="form-control rounded-0"
                    placeholder="Media URL"
                    name="mediaLink2"
                  />
                </div>
                <div className="form-group">
                  <input
                    value={this.state.mediaLink3}
                    onChange={this.handleInputChange}
                    type="text"
                    className="form-control rounded-0"
                    placeholder="Media URL"
                    name="mediaLink3"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    value={this.state.bio}
                    onChange={this.handleInputChange}
                    className="form-control rounded-0"
                    name="bio"
                    cols="50"
                    rows="5"
                    placeholder="Type or paste bio here"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    value={this.state.goal}
                    onChange={this.handleInputChange}
                    className="form-control rounded-0"
                    name="goal"
                    cols="50"
                    rows="5"
                    placeholder="Description of product (i.e. My song 'on the run' is available to you)" />
                </div>
                <div className="form-group">
                  <input
                    value={this.state.availablePercentage}
                    onChange={this.handleInputChange}
                    type="number"
                    className="form-control rounded-0"
                    placeholder="Enter percentage to share 0-100"
                    name="availablePercentage"
                  />
                </div>
                <div className="form-group">
                  <input
                    value={this.state.totalPrice}
                    onChange={this.handleInputChange}
                    type="number"
                    className="form-control rounded-0"
                    placeholder="Price. (e.g. for $12,000 enter 12000)"
                    name="totalPrice"
                  />
                </div>
                <div className="form-group">
                  <input
                    value={this.state.genre}
                    onChange={this.handleInputChange}
                    type="text"
                    className="form-control rounded-0"
                    placeholder="Pop, Rap..."
                    name="genre"
                  />
                  
                </div>
                <div className="form-group">
                  <input
                    value={this.state.genre}
                    onChange={this.handleInputChange}
                    type="text"
                    className="form-control rounded-0"
                    placeholder="Ascap, BMI, Sesac"
                    name="pro"
                  />
                  </div>
                <div className="form-group">
                </div>
                <br />
                <button
                  type="button"
                  className="btn btn-info rounded-0"
                  data-toggle="modal"
                  data-target="#exampleModalLong">
                  Submit
                </button>
              </form>
              <br />
            </Col>
            <Col size="md-3 ">
              <div
                className="card mt-3 rounded-0 sticky-top"
                style={styles.card}  >
                <div className="alert alert-dark rounded-0">
                  <h3>
                    <img
                      className="text-center rounded-circle m-2"
                      alt="null"
                      height="125px"
                      width="125px"
                      src={`${this.state.imageLink ? this.state.imageLink : "https://i2.wp.com/crimsonems.org/wp-content/uploads/2017/10/profile-placeholder.gif?fit=250%2C250&ssl=1"}`}
                      style={styles.image}
                    />
                    <br />
                    <span className="m-2" style={styles.blueText}>{this.state.name}</span>
                  </h3>
                </div>
                <div className="card-body">
                  <p><span style={styles.blueText}>About me: </span>{this.state.bio}</p>
                  <p><span style={styles.blueText}>Investment Opprtunity: </span>{this.state.goal}</p>
                  <span style={styles.blueText}>Media Links:</span> <br />
                  <a href={this.state.mediaLink1} target="_blank">{this.state.mediaLink1}</a><br />
                  <a href={this.state.mediaLink2} target="_blank">{this.state.mediaLink2}</a><br />
                  <a href={this.state.mediaLink3} target="_blank">{this.state.mediaLink3}</a><br />
                </div>
                <div className="" style={styles.cardFooter}>
                </div>
              </div>
            </Col>
            <Col size="md-3" />
          </Row>
        </Container>

        <div className=" rounded-0 modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className=" rounded-0 modal-dialog" role="document">
            <div className=" rounded-0 modal-content">
              <div className=" rounded-0 modal-header">
                <h5 className=" rounded-0 modal-title" id="exampleModalLongTitle">Terms of Service</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <object type="text/html" data="https://app.termly.io/document/terms-of-use-for-online-marketplace/60c8782c-a8e3-4fa3-88dd-ae95197eaf32" width="450px" height="700px">
                </object>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-sm btn-secondary rounded-0" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn btn-info rounded-0" data-dismiss="modal"
                  onClick={this.handleFormSubmit}
                >Accept</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistSignUp;
