import React, { Component } from "react";
import "./contactTheDev.css";
import { withRouter } from "react-router-dom";
import API from "../../utils/API";

export class ContactTheDev extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

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
        alert("Your message has been sent!");
        window.location.reload("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
        <div className="btn-group dropleft float-right mx-0 px-0 mt-5">
          <button
            type=""
            className="btn contact rounded"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fas fa-comment-alt"></i>
          </button>
          <div className="dropdown-menu dev">
            {/* <!-- Dropdown menu links --> */}
            <div className="">
              <div className="card-header m-0 p-0">
                <span className="h6 text-light p-2">
                  Contact the developer!
                </span>
              </div>
              <div className="card-body  m-0 p-0" id="cbody">
                <div className="form-group mx-3">
                  <label className="mb-0 mt-1 text-light">
                    <small>Name</small>
                  </label>
                  <input
                    type="text"
                    className="form-control-sm ctd-inputs"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />

                  <label className="mb-0 mt-1 text-light ">
                    <small>Email</small>
                  </label>

                  <input
                    type="text"
                    className="form-control-sm ctd-inputs"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />

                  <label className="mb-0 mt-1 text-light">
                    <small>Message</small>
                  </label>

                  <textarea
                    value={this.state.message}
                    onChange={this.handleInputChange}
                    className="form-control ctd-inputs text-light"
                    name="message"
                    cols="50"
                    rows="5"
                  />
                  <button
                    className="btn btn-sm btn-info rounded-0 mt-2"
                    onClick={this.send}
                    type="submit"
                    value="Send"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default withRouter(ContactTheDev);
