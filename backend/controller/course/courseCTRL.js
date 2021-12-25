const Course = require("../../model/courseModel");
const Tasks = require("../../model/taskModel");
const Lessons = require("../../model/lessonModel");
const Instructor = require("../../model/instructorModel");
const Student = require("../../model/studentsModel");

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filtering() {
    const queryObj = { ...this.queryString };

    const excludedFields = ["page", "sort", "limit"];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(gte|gt|lt|lte|regex)\b/g,
      (match) => "$" + match
    );
    this.query.find(JSON.parse(queryStr));

    return this;
  }

  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 8;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

const courseCTRL = {
  getCourse: async (req, res) => {
    try {
      const features = new APIfeatures(Course.find(), req.query)
        .filtering()
        .paginating();

      const courses = await features.query;

      res.json({
        status: "success",
        result: courses.length,
        courses: courses,
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  createCourse: async (req, res) => {
    try {
      const {
        title,
        price,
        category,
        description,
        about,
        banner,
        objective,
        requirements,
      } = req.body;
      if (
        !title ||
        !price ||
        !category ||
        !description ||
        !about ||
        !objective ||
        !requirements
      ) {
        return res.status(400).json({ msg: "Invalid Course Credentials." });
      }
      if (!banner) {
        return res.status(400).json({ msg: "No Image is Selected." });
      }
      const user = req.user.id;
      const instructor = await Instructor.findOne({ _id: user }).select(
        "-password"
      );
      const newCourse = new Course({
        user: user,
        title,
        price,
        description,
        about,
        objective,
        requirements,
        instructor: instructor,
        banner,
        category,
      });
      await newCourse.save();
      res.json({ msg: "Created a Course." });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  reviewCourse: async (req, res) => {
    try {
      const { rating, comment } = req.body;
      if (!rating || !comment) {
        return res.status(400).json({ msg: "Invalid Comment." });
      }
      if (comment.length < 3) {
        return res.status(400).json({ msg: "Comment Must be 3 Lengths Long." });
      }
      const course = await Course.findById(req.params.course_id);
      if (!course) {
        return res.status(400).json({ msg: "Course Not Found." });
      }
      const user = req.user.id;
      const author = await Student.findOne({ _id: user });
      course.comments.push({
        rating,
        comment,
        author: author.name,
      });
      course.save();
      res.json({ msg: "Successfully Commented." });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  courseDetails: async (req, res) => {
    try {
      const course_id = req.params.course_id;
      const courseDetails = await Course.findOne({ _id: course_id });
      const tasks = await Tasks.find({ course_id: course_id }).select(
        "-course_id"
      );
      const lessons = await Lessons.find({ course_id: course_id }).select(
        "-course_id"
      );
      res.json({ courseDetails: courseDetails, tasks, lessons });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  // createLessons: async (req, res) => {
  //   try {
  //     const { heading, videos } = req.body;
  //     if (!heading || !videos) {
  //       return res.status(400).json({ msg: "Invalid Lesoons." });
  //     }
  //     const course = await Course.findById(req.params.course_id);
  //     if (!course) {
  //       return res.status(400).json({ msg: "Course Not Found." });
  //     }
  //     course.videos.push({
  //       heading,
  //       videos,
  //     });
  //     course.save();
  //     res.json({ msg: "Successfully Added Lesson." });
  //   } catch (error) {
  //     return res.status(500).json({ msg: error.message });
  //   }
  // },
};

module.exports = courseCTRL;
