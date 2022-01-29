const router = require("express").Router();
const courseCategoryCtrl = require("../../controller/admin/courseCategoryCTRL");
const auth = require("../../middleware/auth");
const authAdmin = require("../../middleware/authAdmin");

router
  .route("/course_cetegory")
  .post(auth, authAdmin, courseCategoryCtrl.createCategory)
  .get(courseCategoryCtrl.getCategory);

router
  .route("/course_cetegory/:course_category_id")
  .put(auth, authAdmin, courseCategoryCtrl.updateCategory)
  .delete(auth, authAdmin, courseCategoryCtrl.deleteCategory);

module.exports = router;
