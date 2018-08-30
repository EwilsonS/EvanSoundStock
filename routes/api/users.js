const router = require("express").Router();
const usersController = require("../../controllers/usersController");
var passport = require("../../config/passport");

// Matches with "/api/users"
router
  .route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

  router
  .route("/logout/:id")
  .put(usersController.updateOffline)

// Matches with "/api/users/login"
router
  .route("/login")
  .post(usersController.findOne)
module.exports = router;