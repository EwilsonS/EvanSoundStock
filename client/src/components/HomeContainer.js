import React, { Component } from "react";
import { Container, Row, Col } from "./Grid";
import Nav from "./Navbar/Nav";
import API from "../utils/API";
import WelcomeDiv from "./LayoutWithContent/WelcomeDiv";
import HowItWorks from "./Pages/HowItWorks";
import FeaturedArtists from "./LayoutWithContent/Featured";
import Footer from "./LayoutWithContent/Footer";
// import { LoginDashboard } from "./Artist/LoginDashboard";
import { ContactTheDev } from "./LayoutWithContent/ContactTheDev";

class HomeContainer extends Component {
  state = {
    artists: []
  };

  componentDidMount() {
    this.loadArtist();
  }

  loadArtist = () => {
    API.getUsers()
      .then(res => {
        this.setState({ artists: res.data });
      })
      .catch(err => console.log(err));
  };

  addToPortfolio = (artistId, image) => {
    // if logged in
    if (localStorage.getItem("id") !== null) {
      // get the user's model from db
      API.getUser(localStorage.getItem("id")).then(res => {
        localStorage.setItem("artistImage", image);
        localStorage.setItem("artistId", artistId);
        API.updateUserArtist(
          localStorage.getItem("id"),
          localStorage.getItem("artistId")
        );
      });
    } else {
      alert("You must be logged in to access this feature");
    }
  };

  render() {
    return (
      <div>
        <Nav />
        <Container fluid>
          <Row>
            <Col size="md-2" />
            <Col size="md-8">
              <WelcomeDiv />
            </Col>
            <Col size="md-2">
              <ContactTheDev  />
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <FeaturedArtists artists={this.state.artists} />
            </Col>
          </Row>
          <Row>
            <Col size="md-2" />
            <Col size="md-8">
              <HowItWorks />
            </Col>
            <Col size="md-2" />
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
export default HomeContainer;
