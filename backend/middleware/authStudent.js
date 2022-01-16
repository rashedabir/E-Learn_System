const Student = require("../model/studentsModel");

const authStudent = async (req, res, next) => {
  try {
    const student = await Student.findOne({
      _id: req.user.id,
    });
    if (!student) {
      return res.status(400).json({ msg: "Student Recources Access Denied" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = authStudent;
