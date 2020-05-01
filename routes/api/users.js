const router = require("express").Router();
const usersController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.update);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findByEmail)

module.exports = router;
