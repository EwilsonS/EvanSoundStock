const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const passportLocalMongoose = require('passport-local-mongoose')
const UserSchema = new mongoose.Schema({

  name: {
    type: String,
    default: "",
    required: true
  },
  email: {
    type: String,
    default: "",
    required: true,
    unique: true
  },
  password: {
    type: String,
    default: "",
    required: true
  },
  mediaLink1: {
    type: String
  },
  mediaLink2: {
    type: String
  },
  mediaLink3: {
    type: String
  },
  imageLink: {
    type: String
  },
  bio: {
    type: String,
    default: ""
  },
  goal: {
    type: String,
    default: ""
  },
  availablePercentage: {
    type: Number,
    default: 5
  },
  genre: {
    type: String,
    default: ""

  },
  totalPrice: {
    type: Number,
    default: 0
  },
  account: {
    type: String,
    default: ""
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});
UserSchema.plugin(passportLocalMongoose)

UserSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model("User", UserSchema);