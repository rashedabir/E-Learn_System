const router = require("express").Router();
const authCTRL = require("../../controller/student/authCTRL");
const auth = require("../../middleware/auth");
const authStudent = require("../../middleware/authStudent");

router.get("/refresh_token", authCTRL.refreshToken);
router.get("/logout", authCTRL.logout);

module.exports = router;
