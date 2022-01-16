const router = require("express").Router();
const authCTRL = require("../../controller/parent/authCTRL");
const auth = require("../../middleware/auth");
const authParent = require("../../middleware/authParent");

router.post("/register", authCTRL.register);
router.get("/profile", auth, authParent, authCTRL.getUser);
router.post("/login", authCTRL.login);

module.exports = router;
