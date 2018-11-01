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
              <div className="card mt-3 rounded-0">
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
  }
  // shows investors choices
}

export default UserProfile;