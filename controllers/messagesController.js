const db = require("../models");

module.exports = {
  create: function (req, res) {
    db.Message
      .create(req.body)
      .then(dbModel => {
        res.json(dbModel)
        console.log(`dbModel ${dbModel}`)
      })
      .catch(err => res.status(422).json(err));
  },
  findAll: function (req, res) {
    db.Message
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
