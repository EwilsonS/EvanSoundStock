const router = require("express").Router();
const artistRoutes = require("./artists");
const investorRoutes = require("./investors");
const userRoutes = require("./users")

router.use("/artists", artistRoutes);
router.use("/investors", investorRoutes);
router.use("/users", userRoutes)


module.exports = router;
