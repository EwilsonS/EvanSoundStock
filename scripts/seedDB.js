const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/soundstock"
);

const artistSeed = [
  {
    email: "artist@test.com",
    password:"123456",
    name: "Joe Doe",
    imageLink: "https://www.google.com",
    songLink:"https://www.youtube.com",
    bio:"I'm the man wiht the plan",
    goal:"I'm selling 10% of all future publishing for $50 per share out of 100 shares"
  },
  {
    email: "shelleg@g.cofc.edu",
    password:"password",
    name: "Ed Shell",
    imageLink: "https://image.ibb.co/k0DyFp/untitled.png",
    songLink: "https://www.youtube.com/watch?v=5YIxpNPhAQE",
    bio: "I'm like a mix bewteen fergie and jesus and I like to image jesus playing lead vocals for lynard skynard and Im in the front row hammered drunk",
    goal: "Tryna make bank"
  }
];

const investorSeed = [
    {
        email: "ivestor@test.com",
        password:"123456",
        name: "Big Sal"
    }
]

db.Artist
  .remove({})
  .then(() => db.Artist.collection.insertMany(artistSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Investor
  .remove({})
  .then(() => db.Investor.collection.insertMany(investorSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });