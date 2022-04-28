const userController = require("../controllers/userController");

const router = require("express").Router();

// ADD USER
router.post("/", userController.addUser);

// GET ALL USERS
router.get("/", userController.getAllUsers);

module.exports = router;