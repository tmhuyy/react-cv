const skillController = require("../controllers/skillController");

const router = require("express").Router();

// ADD SKILL
router.post("/", skillController);

module.exports = router;