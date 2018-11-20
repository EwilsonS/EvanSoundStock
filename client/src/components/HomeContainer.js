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
// import { ContactTheDev } from "./LayoutWithContent/ContactTheDev";
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
    goal: "",
    key: ""
  };

  componentDidMount() {
    this.loadArtist();
  }

  loadArtist = () => {
    API.getUsers()
      .then(res => this.setState({ artists: res.data }))
      .catch(err => console.log(err));
  };

  addToPortfolio = (artistId, image) => {
    // if logged in
    if (localStorage.getItem("id") !== null) {
      // get the user's model from db
      API.getUser(localStorage.getItem("id"))
        .then(res => {
          console.log(res.data)
          console.log(`added to loc storage: "${image}"`)
          console.log(`added to loc storage: "${artistId}"`)

          localStorage.setItem("artistImage", image)
          localStorage.setItem("artistId", artistId)

          API.updateUserArtist(localStorage.getItem("id"), localStorage.getItem("artistId"))
        })
    }
    else {
      alert("You must be logged in to access this feature")
    }
  }

  render() {
    return (
      <div>
        <Nav />

        <Container  >
          <Row>
            <Col size="md-3">
              <HowItWorks />
            </Col>
            <Col size="md-6">
              <WelcomeDiv />
              <FeaturedArtists 
                name={this.state.artists.name}
                id={this.state.artists.id}
                bio={this.state.artists.bio}
                totalPrice={this.state.artists.totalPrice}
                goal={this.state.artists.goal}
                availablePercentage={this.state.artists.availablePercentage}
                imageLink={this.state.artists.imageLink}


              />
            </ Col>
            <Col size="md-3">
              <div className="sticky-top">
                <LoginDashboard />
                {/* <ContactTheDev /> */}
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    )
  }
}
export default HomeContainer;