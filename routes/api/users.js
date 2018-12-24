const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users/..."
router
  .route("/")
  .get(usersController.findAll)
  .post(usersController.create);

router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

router
  .route("/addArtist/:id")
  .put(usersController.updateArray)

router
  .route("/removeArtist/:id")
  .put(usersController.pullArray)

router
  .route("/logout/:id")
  .put(usersController.updateOffline)

router
  .route("/login")
  .post(usersController.findOne)
module.exports = router;