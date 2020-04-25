const router = require("express").Router();
const earthquakeController = require("../../controllers/earthquakeController");

router.route("/")
    .get(earthquakeController.findAll);


module.exports = router;