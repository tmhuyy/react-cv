const projectController = require("../controllers/projectController");

const router = require("express").Router();

// ADD USER
router.post("/",projectController );

module.exports = router;