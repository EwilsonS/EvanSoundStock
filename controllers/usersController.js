const db = require("../models");
// const bcrypt = require("bcrypt")
// Defining methods for the UsersController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findOne: function (req, res) {
    db.User
      .findOne({
        email: req.body.email
      }, function (err, user) {
        if (user) {
          req.session.user = user
          console.log("find one: " + user._id)
        }
      })
      .sort({ date: -1 })
      .then(dbModel => {

        res.json(dbModel)
      })

      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function (req, res) {
    db.User
      .create(req.body)
      .then(dbModel => {
        res.json(dbModel)
        console.log(`dbModel ${dbModel}`)
      })
      .catch(err => res.status(422).json(err));
  },

  update: function (req, res) {
    // console.log(req.session)
    db.User
      .findOneAndUpdate(
        { _id: req.params.id }, { $set: { online: true } })
      // .populate("artist")
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));



  },
  updateOffline: function (req, res) {
    // console.log("offline: "+ req.session.user._id)
    db.User
      .findOneAndUpdate(
        { _id: req.params.id }, { $set: { online: false } })
      .then(dbModel => {

        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },

  updateArray: function (req, res) {
    // console.log("offline: "+ req.session.user._id)
    console.log(Object.keys(req.body))
    // console.log(req)
    
    console.log(req.params.id)
    
    db.User
      .findOneAndUpdate(
        { _id: req.params.id },{ $push: { artists: Object.keys(req.body) }})
      .then(dbModel => {

        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },


  remove: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
