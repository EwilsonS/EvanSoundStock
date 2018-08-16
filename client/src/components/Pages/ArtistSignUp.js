import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import Nav from "../Navbar/Nav";
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
  },
  card: {
    // width: "190px",
    position: "fixed",
    marginLeft: "2%",
    marginTop: "1%"
  }
}
export class ArtistSignUp extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    imageLink: "",
    songLink: "",
    bio: "",
    goal: "",
    isDeleted: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveUser({
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      imageLink: this.state.imageLink,
      songLink: this.state.songLink,
      bio: this.state.bio,
      goal: this.state.goal,
      isDeleted: this.state.isDeleted
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
                    className="form-control"
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
                    className="form-control"
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
                    className="form-control"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <div className="form-group">
                  {/* use ternary to show green or red alert for validation */}
                  <input
                    onChange={this.handleInputChange}
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    name="confirm"

                  />
                </div>
                <div className="form-group">
                  <input
                    value={this.state.imageLink}
                    onChange={this.handleInputChange}
                    type="text"
                    className="form-control"
                    placeholder="Image URL"
                    name="imageLink"
                  />
                </div>
                <div className="form-group">
                  <input
                    value={this.state.songLink}
                    onChange={this.handleInputChange}
                    type="text"
                    className="form-control"
                    placeholder="Media URL"
                    name="songLink"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    value={this.state.bio}
                    onChange={this.handleInputChange}
                    className="form-control"
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
                    className="form-control"
                    name="goal"
                    cols="50"
                    rows="5"
                    placeholder="Description of investment opportunity (i.e. I'm selling 10% of all future publishing for $15,000)" />
                </div>
                <br />
                <button
                  type="button"
                  className="btn btn-info"
                  data-toggle="modal"
                  data-target="#exampleModalLong">
                  Submit
                </button>
              </form>
              <br />
            </Col>
            <Col size="md-3 ">
              <div className="card mt-3 rounded sticky-top"  >
                <div className="card-header bg-secondary" style={styles.cardHeader}>
                  <h3>
                    {this.state.name}
                  </h3>
                </div>
                <div className="card-body">
                  <img className="text-center rounded-circle" alt="null" height="200px" width="200px" src={`${this.state.imageLink ? this.state.imageLink : "https://i2.wp.com/crimsonems.org/wp-content/uploads/2017/10/profile-placeholder.gif?fit=250%2C250&ssl=1"}`} />
                  <br />
                  <br />
                  <h5>About me: {this.state.bio}</h5>
                  <br />
                  <p>Investment Opprtunity: {this.state.goal}</p>
                  <br />
                  <p>Media Links: <a href={this.state.songLink}>{this.state.songLink}</a></p>
                </div>
                <div className="card-footer" style={styles.cardFooter}>
                </div>
              </div>
            </Col>
            <Col size="md-3" />
          </Row>
        </Container>

<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Terms of Service</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              <object type="text/html" data="https://app.termly.io/document/terms-of-use-for-online-marketplace/60c8782c-a8e3-4fa3-88dd-ae95197eaf32" width="450px" height="700px">
    </object>
      </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn btn-info"data-dismiss="modal"
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
