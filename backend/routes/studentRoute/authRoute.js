const router = require("express").Router();
const authCTRL = require("../../controller/student/authCTRL");
const auth = require("../../middleware/auth");
const authStudent = require("../../middleware/authStudent");

router.post("/register", authCTRL.register);
router.get("/profile", auth, authStudent, authCTRL.getUser);
router.post("/login", authCTRL.login);

module.exports = router;
