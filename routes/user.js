const userController = require("../controllers/userController");

const router = require("express").Router();

// ADD USER
router.post("/", userController.addUser);

// GET THE NUMBER OF USERS
// router.get("/", userController.countUsers);

// GET NEWEST USER
router.get("/", userController.getUser);

module.exports = router;