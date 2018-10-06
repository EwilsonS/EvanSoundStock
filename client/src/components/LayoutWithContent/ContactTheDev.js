import React, { Component } from "react";
import "./contactTheDev.css"
import { withRouter } from "react-router-dom";
import API from "../../utils/API";

export class ContactTheDev extends Component {
  state = {
    name:"",
    email:"",
    message:""
  }

  handleInputChange = e => {
    // Pull the name and value properties off of the e.target (the element which triggered the event)
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  send = event => {
    event.preventDefault();

    API.saveMessage({
      email: this.state.email,
      name: this.state.name,
      message: this.state.message
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

      <div className="card mt-3 mb-1 rounded-0 dev">
        <span className="h6 text-light p-2">Contact the developer!</span>
        <div className="form-group mx-3">
          <label className="mb-0 mt-1 text-light"><small>Name</small></label>
          <input
            type="text"
            className="form-control h-25 rounded-0 bg-secondary text-light"
            placeholder="name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />

          <label className="mb-0 mt-1 text-light"><small>Email</small></label>

          <input
            type="text"
            className="form-control h-25 rounded-0 bg-secondary text-light"
            placeholder="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />

          <label className="mb-0 mt-1 text-light"><small>Message</small></label>

          <textarea
            value={this.state.message}
            onChange={this.handleInputChange}
            className="form-control rounded-0 bg-secondary text-light"
            name="message"
            cols="50"
            rows="5"
            placeholder="Type message here"
          />
          <button
            className="btn btn-sm btn-info rounded-0 mt-2"
            onClick={this.send}
            type="submit"
            value="Send"
          >Send</button>
        </div>
      </div>
    )
  }

}

export default withRouter(ContactTheDev)
