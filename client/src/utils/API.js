import axios from "axios";

export default {
  // Gets all artists
  getArtists: function() {
    return axios.get("/api/artists");
  },
  // Gets the artist with the given id
  getArtist: function(id) {
    return axios.get("/api/artists/" + id);
  },
  // Deletes the Artist with the given id
  deleteArtist: function(id) {
    return axios.delete("/api/artists/" + id);
  },
  // Saves an Artist to the database
  saveArtist: function(artistData) {
    return axios.post("/api/artists", artistData);
  },
   // Gets all investors
   getInvestors: function() {
    return axios.get("/api/investors");
  },
  // Gets the investor with the given id
  getInvestor: function(id) {
    return axios.get("/api/investors/" + id);
  },
  // Deletes the investor with the given id
  deleteInvestor: function(id) {
    return axios.delete("/api/investors/" + id);
  },
  // Saves an investor to the database
  saveInvestor: function(investorData) {
    return axios.post("/api/investors", investorData);
  },
  // ??
  saveUser: function(userData){
    return axios.post("/api/user", userData)
  }
  
};
