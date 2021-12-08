const router = require("express").Router();
const authCTRL = require("../../controller/instructor/authCTRL");
const instructor = require("../../middleware/instructor");

router.post("/register", authCTRL.register);
router.post("/login", authCTRL.login);
router.get("/logout", authCTRL.logout);

router.get("/profile", instructor, authCTRL.getUser);

module.exports = router;
