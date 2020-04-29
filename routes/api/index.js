const router = require("express").Router();
const earthquakeRoutes = require("./earthquake");

router.use("/earthquakes", earthquakeRoutes);

module.exports = router;