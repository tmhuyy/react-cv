const userController = require("../controllers/userController");

const router = require("express").Router();

// ADD USER
router.post("/", userController.addUser);

module.exports = router;