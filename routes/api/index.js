const router = require("express").Router();

const usersRoutes = require("./users");
const earthquakeRoutes = require("./earthquake");

// users routes
router.use("/users", usersRoutes);
// earthquake routes
router.use("/earthquakes", earthquakeRoutes);

module.exports = router;
