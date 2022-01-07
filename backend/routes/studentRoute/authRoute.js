const router = require("express").Router();
const authCTRL = require("../../controller/student/authCTRL");
const auth = require("../../middleware/auth");
const authStudent = require("../../middleware/authStudent");

router.post("/register", authCTRL.register);
router.post("/login", authCTRL.login);

module.exports = router;
