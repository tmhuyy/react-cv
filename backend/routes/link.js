const linkController = require("../controllers/linkController");

const router = require("express").Router();

// ADD USER
router.post("/", linkController );

module.exports = router;