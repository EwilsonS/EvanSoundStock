const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;
// const passportLocalMongoose = require("passport-local-mongoose");

// validate data here using requred: true & function for password length

const investorSchema = new Schema({
  name: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    default: ""
  },
  password: {
    type: String,
    default: ""
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

// investorSchema.plugin(passportLocalMongoose);
investorSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

investorSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
}

const Investor = mongoose.model("Investor", investorSchema);

module.exports = Investor;