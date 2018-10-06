const router = require("express").Router();
const messagesController = require("../../controllers/messagesController");
var passport = require("../../config/passport");

// Matches with "/api/messages"
router
  .route("/")
  // .get(messagesController.findAll)
  .post(messagesController.create);

module.exports = router;