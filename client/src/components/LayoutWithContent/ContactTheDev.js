import React, { Component } from "react";
import "./contactTheDev.css"
import { withRouter } from "react-router-dom";

export class ContactTheDev extends Component {
  state = {

  }

  render() {
    return (

      <div className="card mt-3 rounded-0 dev">
        <span className="h6 text-light p-2">Contact the developer!</span>
        <div className="form-group m-2">
          <input
            type="text"
            className="form-control h-25 rounded-0"
            placeholder="name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group m-2">
          <input
            type="text"
            className="form-control h-25 rounded-0"
            placeholder="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group m-2">
          <textarea
            value={this.state.message}
            onChange={this.handleInputChange}
            className="form-control rounded-0"
            name="message"
            cols="50"
            rows="5"
            placeholder="Type message here"
          />
        </div>
      </div>
      )
    }
  
  }
  
  export default withRouter(ContactTheDev)
