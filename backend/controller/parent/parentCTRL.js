const Student = require("../../model/studentsModel");

const parentCTRL = {
  getChild: async (req, res) => {
    try {
      const student = await Student.find({ parent: req.user.id })
        .select("-password")
        .select("-enrolled");
      res.json(student);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getSingleChild: async (req, res) => {
    try {
      const courses = await Student.findOne({
        _id: req.params.student_id,
      })
        .select("enrolled.tasks")
        .select("enrolled.courseDetails");
      res.json(courses);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = parentCTRL;
