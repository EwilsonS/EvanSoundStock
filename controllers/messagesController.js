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
  }
};
