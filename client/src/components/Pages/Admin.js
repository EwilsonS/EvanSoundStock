import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import Nav from "../Navbar/Nav";
import API from "../../utils/API";

export class Admin extends Component{

componentDidMount(){
  this.loadMessages();
}

loadMessages = () => {
  API.getMessages()
  .then(res => {
    console.log(res.data)
  })
}

  render(){
    return (
      <div>
        <Nav />
        <Container fluid>
        <Row>
          <Col size="md-4">
          </Col>
          <Col size="md-4">
          </Col>
          <Col size="md-4">
          </Col>
        </Row>
        </Container>
      </div>
    )
  }
}