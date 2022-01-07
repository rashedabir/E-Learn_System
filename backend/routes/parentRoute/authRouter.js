const router = require("express").Router();
const authCTRL = require("../../controller/parent/authCTRL");
const auth = require("../../middleware/auth");
const authParent = require("../../middleware/authParent");

router.post("/register", authCTRL.register);
router.post("/login", authCTRL.login);

module.exports = router;
