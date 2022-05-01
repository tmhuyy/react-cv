const educationController = require("../controllers/educationController");

const router = require("express").Router();

// ADD USER
router.post("/", educationController.addEducation);

// GET ALL EDUCATIONS
router.get("/", educationController.getAllEducations);

module.exports = router;