import React, { Component } from "react";
import API from "../../utils/API"
class UserProfile extends Component {

  state = {
    user: []
  };

  componentDidMount() {
    this.loadUser()
  };

  loadUser = () => {
    API.getUsers({
     
      
    })
      .then(res =>{
        console.log(res.data)
        this.setState({user: res.data})
      })
      .catch(err => console.log(err));
  }

  render() {
    return (

      <h1>Hello {this.state.user.name}</h1>
    )
  }
  // shows investors choices
}

export default UserProfile;