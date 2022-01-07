const router = require("express").Router();
const authCTRL = require("../../controller/instructor/authCTRL");
const auth = require("../../middleware/auth");
// const authInstructor = require("../../middleware/authInstructor");

router.post("/register", authCTRL.register);
router.post("/login", authCTRL.login);

module.exports = router;
