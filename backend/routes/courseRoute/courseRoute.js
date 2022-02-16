const router = require("express").Router();
const courseCTRL = require("../../controller/course/courseCTRL");
const auth = require("../../middleware/auth");
const authInstructor = require("../../middleware/authInstructor");
const authStudent = require("../../middleware/authStudent");

router
  .route("/course")
  .post(auth, authInstructor, courseCTRL.createCourse)
  .get(auth, authInstructor, courseCTRL.instructorCourse);

router.get("/all_course", courseCTRL.getCourse);
router.get("/all/course", courseCTRL.getAllCourse);

router
  .route("/course_details/:course_id")
  .get(courseCTRL.courseDetails)
  .delete(auth, authInstructor, courseCTRL.deleteCourse)
  .put(auth, authInstructor, courseCTRL.updateCourse);

router
  .route("/course/review/:course_id")
  .put(auth, authStudent, courseCTRL.reviewCourse);

router
  .route("/course/enroll")
  .patch(auth, authStudent, courseCTRL.enrollCourse);

module.exports = router;
