import React, { Component } from "react";
import { Container, Row, Col } from "./Grid";
import { Nav } from "./Navbar";
// import { CardDiv } from "./Artist";
import API from "../utils/API";
import WelcomeDiv from "./LayoutWithContent/WelcomeDiv"
import HowItWorks from "./Pages/HowItWorks";
import FeaturedArtists from "./LayoutWithContent/Featured";
import Footer from "./LayoutWithContent/Footer"
import { LoginDashboard } from "./Artist/LoginDashboard";
// import Carousel from "./Carousel/Carousel"
// Import db controllers page and render Carddiv for each person in db collection with artists
// in the form of a function that will be called in the onclick for the submit button
// summary div in card has props children to use to give it the mapped out data

class HomeContainer extends Component {
  state = {
    artists: [],
    name: "",
    imageLink: "",
    songLink: "",
    bio: "",
    goal: ""
  };

  componentDidMount() {
    this.loadArtist();
  }

  loadArtist = () => {
    API.getArtists()
      .then(res => this.setState({ artists: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav >
        </Nav>
        <Container fluid >
          <Row>
            <Col size="md-1" />
            <Col size="md-2">
              <HowItWorks />
            </Col>
            <Col size="md-6">
              <WelcomeDiv />
            <FeaturedArtists />
            </ Col>
            <Col size="md-2">
              <LoginDashboard />
            </Col>
            <Col size="md-1" />
          </Row>
          <Row>
            <Col size="md-12">
            </Col>
          </Row>
          <Row>
            {/* <Carousel /> */}
          </Row>
        </Container>
        <Footer />
      </div>
    )
  }
}
export default HomeContainer;