const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session")
const morgan = require('morgan');
const routes = require("./routes");
const app = express();
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

app.use(session({
  secret: 'keyboard-cat',
  resave: true,
  saveUninitialized: true,
  cookie: {secure:false}
}));

// Access the session as req.session
app.get('/api/user/:id', function(req, res, next) {
  var sessData = req.session;
  sessData.online = true;
  res.send(sessData);
  console.log(`Session on server: ${req.session}`)
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
