import React, { Component } from "react";
import "./contactTheDev.css"
import { withRouter } from "react-router-dom";

export class ContactTheDev extends Component {
  state = {

  }

  render() {
    return (

      <div className="card mt-3 rounded-0 dev">
        <span>Contact the developer!</span>
        <input
          type="text"
          className="form-control"
          placeholder="name"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
        />
      </div>
    )
  }

}

export default withRouter(ContactTheDev)
