const router = require("express").Router();
const authCTRL = require("../../controller/parent/authCTRL");

router.get("/refresh_token", authCTRL.refreshToken);

module.exports = router;
