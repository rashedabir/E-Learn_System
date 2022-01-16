const Instructor = require("../model/instructorModel");

const authInstructor = async (req, res, next) => {
  try {
    const instructor = await Instructor.findOne({
      _id: req.user.id,
    });
    if (instructor.status === false) {
      return res
        .status(400)
        .json({ msg: "Instructor Recources Access Denied" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = authInstructor;
