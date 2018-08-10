import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import Nav from "../Navbar/Nav";
import API from "../../utils/API";

export class ArtistSignUp extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    imageLink: "",
    songLink: "",
    bio: "",
    goal: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveArtist({
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      imageLink: this.state.imageLink,
      songLink: this.state.songLink,
      bio: this.state.bio,
      goal: this.state.goal
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
              <br />
              <form>
                <div className="form-group">
                  <input
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Name"
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
                  <input

                    onChange={this.handleInputChange}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="confirm"
                  />
                </div>
                <div className="form-group">
                  <input
                    value={this.state.imageLink}
                    onChange={this.handleInputChange}
                    type="text"
                    className="form-control"
                    placeholder="Image"
                    name="imageLink"
                  />
                </div>
                <div className="form-group">
                  <input
                    value={this.state.songLink}
                    onChange={this.handleInputChange}
                    type="text"
                    className="form-control"
                    placeholder="Song"
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
                    placeholder="I'm selling 10% of all future publishing for $50 per share out of 100 shares" />
                </div>
                <br />

                <button
                  onClick={this.handleFormSubmit}
                  type="submit"
                  className="btn btn-info">
                  Submit
                </button>

              </form>
              <br />
            </Col>
            <Col size="md-3">
              <div className="card mt-5 sticky-top">
                <div className="card-header bg-light">
                  <h3>
                    {this.state.name}
                  </h3>
                </div>
                  <div className="card-body">
                    <img src={this.state.imageLink} />
                    <br />
                    <h6>Bio: {this.state.bio}</h6>
                  </div>
              </div>
            </Col>
            <Col size="md-3" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default ArtistSignUp;
