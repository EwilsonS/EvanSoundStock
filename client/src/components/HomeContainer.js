import React, { Component } from "react";
import { Container, Row, Col } from "./Grid";
import { Nav, Search, SignIn } from "./Navbar";
import { CardDiv } from "./Artist";
import API from "../utils/API";
import WelcomeDiv from "./LayoutWithContent/WelcomeDiv"
import HowItWorks from "./Pages/HowItWorks";
import FeaturedArtists from "./LayoutWithContent/Featured";

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
        <Nav />
        <Container fluid >
          <Row>
            <Col size="md-12">
              <WelcomeDiv />
              <HowItWorks/>
              <FeaturedArtists />
            </ Col>
          </Row>
          <CardDiv />
        </Container>
      </div>
    )
  }
}
export default HomeContainer;