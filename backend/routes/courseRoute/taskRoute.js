const router = require("express").Router();
const taskCTRL = require("../../controller/course/taskCTRL");
const auth = require("../../middleware/auth");
const authInstructor = require("../../middleware/authInstructor");
const authStudent = require("../../middleware/authStudent");

router
  .route("/task/:course_id")
  .post(auth, authInstructor, taskCTRL.createTask)
  .get(taskCTRL.getTask);

router.route("/task/:task_id").put(auth, authStudent, taskCTRL.submitTask);

router
  .route("/task_update/:task_id")
  .put(auth, authInstructor, taskCTRL.updateTask)
  .get(auth, taskCTRL.getSingleTask)
  .delete(auth, authInstructor, taskCTRL.deleteSingleTask);

router
  .route("/mark_upload/:submission_id")
  .put(auth, authInstructor, taskCTRL.giveMark);

module.exports = router;
