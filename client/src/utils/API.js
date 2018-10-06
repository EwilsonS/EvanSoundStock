import axios from "axios";

export default {
  saveUser: function (user) {
    return axios.post("/api/users", user)
  },
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  // Gets all users
  getUsers: function () {
    return axios.get("/api/users");
  },
  getUsersLogin: function (data) {

    return axios.post("/api/users/login", data);
  },
  saveUserSession: function (userSession) {
    return axios.post("/api/account/login")
  },
  updateUserOnline: function (id) {
    return axios.put("/api/users/" + id)
  },
  updateUserArtist: function (id, data) {
    return axios.put("/api/users/addArtist/" + id, data)
  },
  updateUserOffline: function (id) {
    return axios.put("/api/users/logout/" + id)
  },
  saveMessage: function(message){
    return axios.post("/api/messages", message)
  }
  // logout:
  // // Gets all artists
  // getArtists: function() {
  //   return axios.get("/api/artists");
  // },
  // // Gets the artist with the given id
  // getArtist: function(id) {
  //   return axios.get("/api/artists/" + id);
  // },
  // // Deletes the Artist with the given id
  // deleteArtist: function(id) {
  //   return axios.delete("/api/artists/" + id);
  // },
  // // Saves an Artist to the database
  // saveArtist: function(artistData) {
  //   return axios.post("/api/artists", artistData);
  // },
  //  // Gets all investors
  //  getInvestors: function() {
  //   return axios.get("/api/investors");
  // },
  // // Deletes the investor with the given id
  // deleteInvestor: function(id) {
  //   return axios.delete("/api/investors/" + id);
  // },
  // // Saves an investor to the database
  // saveInvestor: function(investorData) {
  //   return axios.post("/api/investors", investorData);
  // },
  // // ??
  // investorLogin: function(userData){
  //   return axios.post("/api/investors/login", userData)
  // },
  // artistLogin: function(userData){
  //   return axios.post("/api/artists/login", userData)
  // }
};
