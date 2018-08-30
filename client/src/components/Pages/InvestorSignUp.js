import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import Nav from "../Navbar/Nav";
import API from "../../utils/API";

export class InvestorSignUp extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    account: "investor"
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveUser({
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      account: this.state.account
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
            <Col size="2" />
            <Col size="4">
              <h2 className="text-info m-3">
                Investor Sign Up
              </h2>
              <form>
                <input
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                  className="form-control rounded-0 m-2"
                  type="text"
                  placeholder="name" />
                <input
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  className="form-control rounded-0 m-2"
                  type="text"
                  placeholder="email" />
                <input
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  className="form-control rounded-0 m-2"
                  type="password"
                  placeholder="password" />
                <input
                  onChange={this.handleInputChange}
                  name="confirm"
                  className="form-control rounded-0 m-2"
                  type="password"
                  placeholder="confirm password" />

                <button
                  onClick={this.handleFormSubmit}
                  type="submit"
                  className="btn btn-info ml-2 rounded-0">Submit
                </button>
              </form>
            </Col>
            <Col size="6" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default InvestorSignUp;
