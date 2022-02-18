const router = require("express").Router();
const jobCTRL = require("../../controller/admin/jobCTRL");
const auth = require("../../middleware/auth");
const authAdmin = require("../../middleware/authAdmin");

router
  .route("/job")
  .post(auth, authAdmin, jobCTRL.createJob)
  .get(jobCTRL.getJobs);

router
  .route("/job/:job_id")
  .put(auth, authAdmin, jobCTRL.updateJobs)
  .delete(auth, authAdmin, jobCTRL.deleteBlogs)
  .get(jobCTRL.getSingleJobs);

module.exports = router;
