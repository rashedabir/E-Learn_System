const router = require("express").Router();
const adminCTRL = require("../../controller/admin/adminCTRL");
const auth = require("../../middleware/auth");
const authAdmin = require("../../middleware/authAdmin");

router.post("/register", adminCTRL.register);
router.post("/login", adminCTRL.login);
router.get("/refresh_token", adminCTRL.refreshToken);
router.get("/logout", adminCTRL.logout);
router.get("/profile", auth, authAdmin, adminCTRL.getUser);

router.get("/instructor", auth, authAdmin, adminCTRL.instructorList);

router
  .route("/instructor/:instructor_id")
  .put(auth, authAdmin, adminCTRL.updateInstructor);

module.exports = router;
