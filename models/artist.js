const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");


// validate data here using requred: true & function for password length
const artistSchema = new Schema({
    email: { type: String},
    password: { type: String},
    name: { type: String},
    songLink: { type: String},
    imageLink: { type: String},
    bio: String,
    goal: String 
});

artistSchema.plugin(passportLocalMongoose);

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;