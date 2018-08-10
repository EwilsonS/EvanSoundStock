const router = require("express").Router();
const artistRoutes = require("./artists");
const investorRoutes = require("./investors");

// Book routes
router.use("/artists", artistRoutes);
router.use("/investors", investorRoutes);


module.exports = router;
