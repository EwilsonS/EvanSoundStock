const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({

  name: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
    required: true
  },
  message: {
    type: String,
    default:"",
    required: true

  }
});

module.exports = mongoose.model("Message", MessageSchema);
