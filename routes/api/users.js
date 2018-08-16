const router = require("express").Router();
const usersController = require("../../controllers/usersController");
var passport = require("../../config/passport");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

// Matches with "/api/users/login"

router
  .route("/login", passport.authenticate("local"), function(req, res) {
    console.log(req.body)
    // res.send("/investorProfile");
  })
  .post(usersController.findOne)
module.exports = router;
