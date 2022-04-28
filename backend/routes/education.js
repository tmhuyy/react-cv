const educationController = require("../controllers/educationController");

const router = require("express").Router();

// ADD USER
router.post("/", educationController);

module.exports = router;