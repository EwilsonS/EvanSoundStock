const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session")
const morgan = require('morgan');
const routes = require("./routes");
const app = express();
const axios = require("axios")
const cookieParser = require("cookie-parser")
var passport = require("./config/passport");
const PORT = process.env.PORT ? process.env.PORT : 3001;

mongoose.Promise = global.Promise;

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/soundstock");
app.use(morgan('dev'))

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser())
// We need to use sessions to keep track of our user's login status
// app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard-cat',
  resave: true,
  saveUninitialized: true,
  cookie: {secure:false}
}));

// Access the session as req.session
app.get('/api/users/:id', function(req, res, next) {
  var sessData = req.session;
  sessData.online = true;
  res.send('Returning with some text');
  console.log(`Session on server: ${req.session}`)
});

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
