const router = require("express").Router();
const courseCTRL = require("../../controller/course/courseCTRL");
const auth = require("../../middleware/auth");
const authInstructor = require("../../middleware/authInstructor");
const authStudent = require("../../middleware/authStudent");

router
  .route("/course")
  .post(auth, authInstructor, courseCTRL.createCourse)
  .get(courseCTRL.getCourse);

router.route("/course_details/:course_id").get(courseCTRL.courseDetails);

router
  .route("/course/review/:course_id")
  .put(auth, authStudent, courseCTRL.reviewCourse);

module.exports = router;
