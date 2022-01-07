const router = require("express").Router();
const authCTRL = require("../../controller/student/authCTRL");
const auth = require("../../middleware/auth");

router.get("/refresh_token", authCTRL.refreshToken);
router.get("/profile", auth, authCTRL.getUser);
router.get("/logout", authCTRL.logout);

module.exports = router;
