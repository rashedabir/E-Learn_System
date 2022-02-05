const Course = require("../../model/courseModel");
const Student = require("../../model/studentsModel");
const Lessons = require("../../model/lessonModel");

const taskCTRL = {
  getLessons: async (req, res) => {
    try {
      const course_id = req.params.course_id;
      const course = await Course.findOne({ _id: course_id });
      if (!course) {
        return res.status(400).json({ msg: "Course not Found." });
      }
      const lessons = await Lessons.find({ course_id });
      res.json({ lessons });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getSingleLesson: async (req, res) => {
    try {
      const lesson_id = req.params.lesson_id;
      const lesson = await Lessons.findOne({ _id: lesson_id });
      res.json({ lesson });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  createLesson: async (req, res) => {
    try {
      const { title, videos } = req.body;
      if (!title || !videos) {
        return res.status(400).json({ msg: "Invalid Lesson Credentials." });
      }
      const course_id = req.params.course_id;
      const course = await Course.findOne({ _id: course_id });
      if (!course) {
        return res.status(400).json({ msg: "Course not Found." });
      }
      const newLesson = new Lessons({
        course_id,
        title,
        videos,
      });
      await newLesson.save();
      res.json({ msg: "Created a Lesson." });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  updateLesson: async (req, res) => {
    try {
      const { title, videos } = req.body;
      if (!title || !videos) {
        return res.status(400).json({ msg: "Invalid Lesson Credentials." });
      }
      await Lessons.findOneAndUpdate(
        { _id: req.params.lesson_id },
        { title, videos }
      );
      res.json({ msg: "Lesson Updated." });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  deleteLesson: async (req, res) => {
    try {
      await Lessons.findByIdAndDelete({ _id: req.params.lesson_id });
      res.json({ msg: "Lesson is Deleted" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = taskCTRL;
