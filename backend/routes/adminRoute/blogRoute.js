const router = require("express").Router();
const blogCtrl = require("../../controller/admin/blogCTRL");
const auth = require("../../middleware/auth");
const authAdmin = require("../../middleware/authAdmin");

router
  .route("/blog")
  .post(auth, authAdmin, blogCtrl.createBlog)
  .get(blogCtrl.getBlogs);

router
  .route("/blog/:blog_id")
  .put(auth, authAdmin, blogCtrl.updateBlogs)
  .delete(auth, authAdmin, blogCtrl.deleteBlogs);

module.exports = router;
