const bookController = require("../controllers/bookController");

const router = require("express").Router();

// ADD BOOK
router.post("/", bookController.addBook)
// GET ALL BOOKS
router.get("/", bookController.getAllBook)
module.exports = router;