var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models/User");

passport.use(new LocalStrategy(
  {
    username: "email"
  },
  function (email, password, done) {
    db.User.findOne({ email: email }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
      console.log(`user ${user}`)
    });
  }

));

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(db.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(db.serializeUser());
passport.deserializeUser(db.deserializeUser());

// Exporting our configured passport
module.exports = passport;
