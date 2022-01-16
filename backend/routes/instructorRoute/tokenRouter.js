const router = require("express").Router();
const authCTRL = require("../../controller/instructor/authCTRL");
const auth = require("../../middleware/auth");

router.get("/refresh_token", authCTRL.refreshToken);
router.get("/logout", authCTRL.logout);

module.exports = router;
