const router = require("express").Router();
const authCTRL = require("../../controller/student/authCTRL");
const student = require("../../middleware/student");

router.post("/register", authCTRL.register);
router.post("/login", authCTRL.login);
router.get("/logout", authCTRL.logout);

router.get("/profile", student, authCTRL.getUser);

module.exports = router;
