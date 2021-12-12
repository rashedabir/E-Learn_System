const router = require("express").Router();
const authCTRL = require("../../controller/instructor/authCTRL");
const auth = require("../../middleware/auth");
// const authInstructor = require("../../middleware/authInstructor");

router.post("/register", authCTRL.register);
router.post("/login", authCTRL.login);
router.get("/logout", authCTRL.logout);

router.get("/profile", auth, authCTRL.getUser);

module.exports = router;
