const Course = require("../../model/courseModel");
const Student = require("../../model/studentsModel");
const Task = require("../../model/taskModel");

const taskCTRL = {
  getTask: async (req, res) => {
    try {
      const course_id = req.params.course_id;
      const course = await Course.findOne({ _id: course_id });
      if (!course) {
        return res.status(400).json({ msg: "Course not Found." });
      }
      const tasks = await Task.find({ course_id });
      res.json({ tasks });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getSingleTask: async (req, res) => {
    try {
      const task_id = req.params.task_id;
      const task = await Task.findOne({ _id: task_id });
      if (!task) {
        return res.status(400).json({ msg: "Task not Found." });
      }
      res.json({ task });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  deleteSingleTask: async (req, res) => {
    try {
      const task_id = req.params.task_id;
      const task = await Task.findByIdAndDelete({ _id: task_id });
      res.json({ msg: "Delete Successfully." });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  createTask: async (req, res) => {
    try {
      const { title, description, start, end } = req.body;
      if (!title || !description || !start || !end) {
        return res.status(400).json({ msg: "Invalid Task Credentials." });
      }
      const course_id = req.params.course_id;
      const course = await Course.findOne({ _id: course_id });
      if (!course) {
        return res.status(400).json({ msg: "Course not Found." });
      }
      const newTask = new Task({
        course_id,
        title,
        description,
        start,
        end,
      });
      await newTask.save();
      res.json({ msg: "Created a Task." });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  updateTask: async (req, res) => {
    try {
      const { title, description, start, end } = req.body;
      if (!title || !description || !start || !end) {
        return res.status(400).json({ msg: "Invalid Task Credentials." });
      }
      await Task.findOneAndUpdate(
        { _id: req.params.task_id },
        { title, description, start, end }
      );
      res.json({ msg: "Task Updated." });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  submitTask: async (req, res) => {
    try {
      const { answer } = req.body;
      const user = req.user.id;
      const student = await Student.findOne({ _id: user })
        .select("-password")
        .select("-enrolled");
      if (!answer) {
        return res.status(400).json({ msg: "Invalid Answer." });
      }
      const submission = await Task.findOne({ _id: req.params.task_id }).select(
        "submissions"
      );
      const { submissions } = submission;

      const found = submissions.filter((item) => {
        if (item.student.userName == student.userName) {
          return item;
        }
      });

      if (found.length > 0) {
        return res.status(400).json({ msg: "You Allready Submitted." });
      }
      // const submittedStudent = await Task.findOne({
      //   "submissions.student._id": ç._id,
      // });
      // if (submissions) {
      //   return res.status(400).json({ msg: submissions });
      // }

      const task = await Task.findOne({ _id: req.params.task_id });
      task.submissions.push({
        answer,
        student,
      });
      task.save();
      res.json({ msg: "Successfully Submitted." });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  giveMark: async (req, res) => {
    try {
      const { marks } = req.body;
      if (!marks) {
        return res.status(400).json({ msg: "Invalid Mark." });
      }

      await Task.findOneAndUpdate(
        { submissions: { $elemMatch: { _id: req.params.submission_id } } },
        { $set: { "submissions.$.marks": marks } }
      );
      res.json({ msg: "Mark Uploaded." });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = taskCTRL;
