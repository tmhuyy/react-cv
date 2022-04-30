const userController = require("../controllers/userController");

const router = require("express").Router();

// ADD USER
router.post("/create", userController.addUser);

// GET ALL USERS
router.get("/register", userController.getAllUsers);

module.exports = router;