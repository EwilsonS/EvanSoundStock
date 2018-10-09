import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import Nav from "../Navbar/Nav";
import API from "../../utils/API";
import "./admin.css"

export class Admin extends Component {

  state = {
    message: [],
    admin: false
  }

  componentDidMount() {
    if ((localStorage.getItem("name") === "Evan Wilson") && (localStorage.getItem("email") === "ewilsons@aol.com")) {
      this.loadMessages();
      this.setState({
        admin: true
      })
    }
  }

  loadMessages = () => {
    API.getMessages()
      .then(res => {
        console.log(res.data)
        this.setState({
          message:res.data
        })
      })
  }

  render() {
    if (this.state.admin === true) {
      return (
        <div>
          <Nav />
          <Container fluid>
            <Row>
              <Col size="md-4">
                <h4>Visitor Messages</h4>
                {this.state.message.map(mess => mess ? (
                  <div key={mess._id}>
                    <h4>{mess.name}</h4>
                    <h5>{mess.email}</h5>
                    <p>
                      {mess.message}
                    </p>
                    <hr />
                  </div>
                ) : (null)
                )}
              </Col>
              <Col size="md-4">
              </Col>
              <Col size="md-4">
              </Col>
            </Row>
          </Container>
        </div>
      )
    } else {
      return(
      <div>
        <Nav />
        <Container fluid>
          <Row>
            <Col size="md-4"></Col>
            <Col size="md-4">
              <h2>
                You are not authorized to access this page. Please login as an administrator.
              </h2>
            </Col>
            <Col size="md-4"></Col>
          </Row>
        </Container>
      </div>
      )
    }
  }
}