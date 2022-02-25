const Student = require("../../model/studentsModel");
const Parent = require("../../model/parentsModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authCTRL = {
  register: async (req, res) => {
    try {
      const { userName, nid, name, mobile, password, rePassword, address } =
        req.body;

      if (
        !userName ||
        !nid ||
        !name ||
        !mobile ||
        !password ||
        !rePassword ||
        !address
      ) {
        return res.status(400).json({ msg: "Invalid Creadentials." });
      }

      const parent = await Parent.findOne({ nid });
      if (!parent) {
        return res.status(400).json({ msg: "This NID Not Exists." });
      }
      if (parent.mobile !== mobile) {
        return res.status(400).json({ msg: "Mobile Number Not Matched." });
      }
      const existingUser = await Student.findOne({ userName });
      if (existingUser) {
        return res.status(400).json({ msg: "This User Already Exists." });
      }
      if (password.length < 4) {
        return res
          .status(400)
          .json({ msg: "Password must be 4 lengths long." });
      }
      if (password !== rePassword) {
        return res.status(400).json({ msg: "Password Doesn't Match." });
      }
      const hashPass = await bcrypt.hash(password, 10);
      const newStudent = new Student({
        userName,
        parent: parent._id,
        nid,
        name,
        mobile,
        password: hashPass,
        address,
      });

      await newStudent.save();
      const accessToken = createAccessToken({ id: newStudent._id });
      const refreshToken = createRefreshToken({ id: newStudent._id });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        // secure: true,
        // sameSite: "none",
      });

      res.json({
        accessToken,
        user: { name: newStudent.name, type: newStudent.type },
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  refreshToken: async (req, res) => {
    const rf_token = req.cookies.refreshToken;
    if (!rf_token) {
      return res.status(400).json({ msg: "Please Login or Register." });
    }
    jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, student) => {
      if (err) {
        return res.status(400).json({ msg: "Please Login or Register." });
      }
      const accessToken = createAccessToken({ id: student.id });

      res.json({ accessToken });
    });
  },
  login: async (req, res) => {
    try {
      const { userName, password } = req.body;
      if (!userName || !password) {
        return res.status(400).json({ msg: "Invalid Creadential." });
      }
      const user = await Student.findOne({ userName });
      if (!user) {
        return res.status(400).json({ msg: "User Doesn't Exists." });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Incorrect Password." });
      }

      const accessToken = createAccessToken({ id: user._id });
      const refreshToken = createRefreshToken({ id: user._id });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        // secure: true,
        // sameSite: "none",
      });

      res.json({ accessToken, user: { name: user.name, type: user.type } });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("refreshToken", {
        httpOnly: true,
        expires: new Date(0),
        // secure: true,
        // sameSite: "none",
      });
      return res.json({ msg: "Logged Out" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getUser: async (req, res) => {
    try {
      const student = await Student.findById(req.user.id).select("-password");
      if (!student) {
        return res.status(400).json({ msg: "User Doesn't Exists." });
      }
      res.json({ student });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

const createAccessToken = (student) => {
  return jwt.sign(student, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

const createRefreshToken = (student) => {
  return jwt.sign(student, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

module.exports = authCTRL;
