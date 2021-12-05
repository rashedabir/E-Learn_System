const jwt = require("jsonwebtoken");

const student = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(400).json({ msg: "Invalid Athentication." });
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, student) => {
      if (err) {
        return res.status(400).json({ msg: "Invalid Athentication." });
      }
      req.student = student;
      next();
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = student;
