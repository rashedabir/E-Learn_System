const router = require("express").Router();
const blogCategoryCTRL = require("../../controller/admin/blogCategoryCTRL");
const auth = require("../../middleware/auth");
const authAdmin = require("../../middleware/authAdmin");

router
  .route("/blog_cetegory")
  .post(auth, authAdmin, blogCategoryCTRL.createCategory)
  .get(blogCategoryCTRL.getCategory);

router
  .route("/blog_cetegory/:blog_category_id")
  .put(auth, authAdmin, blogCategoryCTRL.updateCategory)
  .delete(auth, authAdmin, blogCategoryCTRL.deleteCategory);

module.exports = router;
