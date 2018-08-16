const express = require("express");
const bodyParser = require("body-parser");
// const path = require("path");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const morgan = require('morgan');
const routes = require("./routes");
const app = express();
var passport = require("./config/passport");
const PORT = process.env.PORT ? process.env.PORT: 3001;

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/soundstock");
app.use(morgan('dev'))
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// We need to use sessions to keep track of our user's login status
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);
// Send every request to the React app
// Define any API routes before this runs

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
