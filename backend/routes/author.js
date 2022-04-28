const authorController = require("../controllers/authorController");

const router = require("express").Router();

// ADD AUTHOR
router.post("/", authorController.addAuthor)