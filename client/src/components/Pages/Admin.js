import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import NavSmall from "../Navbar/NavSmall";
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

visits = () => {
  //counting function will need new model/routes etc.
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
          <NavSmall />
          <Container fluid>
            <Row>
              <Col size="md-4">
                <h4 className="text-secondary">Visitor Messages</h4>
                {this.state.message.map(mess => mess ? (
                  <div className="text-secondary" key={mess._id}>
                    <h6>From: {mess.name}</h6>
                    <h6>Email: {mess.email}</h6>
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
        <NavSmall />
        <Container fluid>
          <Row>
            <Col size="md-4"></Col>
            <Col size="md-4">
              <h2 className="text-secondary">
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