const bookController = require("../controllers/bookController");

const router = require("express").Router();

// ADD BOOK
router.post("/", bookController.addBook)
// GET ALL BOOKS
router.get("/", bookController.getAllBook)

// GET A BOOK
router.get("/:id", bookController.getABook)

// UPDATE A BOOK
router.post("/:id", bookController.updateABook);
module.exports = router;