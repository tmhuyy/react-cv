const authorController = require("../controllers/authorController");

const router = require("express").Router();

// ADD AUTHOR
router.post("/", authorController.addAuthor);

// GET ALL AUTHOR 
router.get("/", authorController.getAllAuthor);

// GET AN AUTHOR
router.get("/:id", authorController.getAnAuthor);

module.exports = router;