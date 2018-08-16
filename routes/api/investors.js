const router = require("express").Router();
const investorsController = require("../../controllers/investorsController");

// Matches with "/api/investors"
router.route("/")
  .get(investorsController.findAll)
  .post(investorsController.create);

// Matches with "/api/investors/:id"
router
  .route("/:id")
  .get(investorsController.findById)
  .put(investorsController.update)
  .delete(investorsController.remove);

// Matches with "/api/investors/login"

router
  .route("/login")
  .post(investorsController.findAll)
module.exports = router;
