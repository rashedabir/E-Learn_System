const router = require("express").Router();
const lessonCTRL = require("../../controller/course/lessonCTRL");
const auth = require("../../middleware/auth");
const authInstructor = require("../../middleware/authInstructor");

router
  .route("/lesson/:course_id")
  .post(auth, authInstructor, lessonCTRL.createLesson)
  .get(lessonCTRL.getLessons);

router.route("/lesson/:lesson_id").put(auth, lessonCTRL.updateLesson);

module.exports = router;
