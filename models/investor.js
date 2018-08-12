const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

// validate data here using requred: true & function for password length

const investorSchema = new Schema({
  name: { type: String },
  email: { type: String },
  password: {type:String}
});

investorSchema.plugin(passportLocalMongoose);


const Investor = mongoose.model("Investor", investorSchema);

module.exports = Investor;