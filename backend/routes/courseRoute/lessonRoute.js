const router = require("express").Router();
const lessonCTRL = require("../../controller/course/lessonCTRL");
const auth = require("../../middleware/auth");
const authInstructor = require("../../middleware/authInstructor");

router
  .route("/lesson/:course_id")
  .post(auth, authInstructor, lessonCTRL.createLesson)
  .get(lessonCTRL.getLessons);

router.route("/lesson/:lesson_id").put(auth, lessonCTRL.updateLesson);

router
  .route("/lesson_details/:lesson_id")
  .get(auth, authInstructor, lessonCTRL.getSingleLesson)
  .delete(auth, authInstructor, lessonCTRL.deleteLesson);

module.exports = router;
