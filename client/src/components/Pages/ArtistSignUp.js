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
                    placeholder="Description of investment opportunity (i.e. I'm selling 10% of all future publishing for $50 per share out of 100 shares)" />
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
              <div className="card mt-5 sticky-top rounded">
                <div className="card-header bg-secondary" style={styles.cardHeader}>
                  <h3>
                    {this.state.name}
                  </h3>
                </div>
                <div className="card-body">
                  <img className="text-center rounded-circle" height="200px" width="200px" src={this.state.imageLink} />
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
            </Col>
            <Col size="md-3" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default ArtistSignUp;
