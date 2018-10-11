import React, { Component } from "react";
import API from "../../utils/API";
import { LoginDashboard } from "../Artist/LoginDashboard";
import { Container, Row, Col } from "../Grid";
import Nav from "../Navbar/Nav";
import Calculator from "../Artist/Calculator"
import "./userProfile.css"
class UserProfile extends Component {

  state = {
    user: [],
    name: ""
  };

  componentDidMount() {
    this.loadUser()
  };

  loadUser = () => {
    // console.log(this.props.match.params.id)
    API.getUser(this.props.match.params.id)


      .then(res => {
        console.log(res.data)
        this.setState({ user: res.data })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Nav />
        <Container fluid>
          <Row>
            <Col size="md-1" />
            <Col size="md-2">
              <Calculator />
            </Col>
            <Col size="md-6">
              <div className="card mt-3">
                <div className="card-header topPic">
                </div>
                <div className="card-body">
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
  // shows investors choices
}

export default UserProfile;