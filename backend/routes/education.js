const educationController = require("../controllers/educationController");

const router = require("express").Router();

// ADD USER
router.post("/", educationController.addEducation);

module.exports = router;