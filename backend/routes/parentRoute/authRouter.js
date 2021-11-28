const router = require("express").Router();
const authCTRL = require("../../controller/parent/authCTRL");
const parent = require("../../middleware/parent");

router.post("/register", authCTRL.register);
router.get("/refresh_token", authCTRL.refreshToken);
router.post("/login", authCTRL.login);
router.get("/logout", authCTRL.logout);

router.get("/profile", parent, authCTRL.getUser);

module.exports = router;
