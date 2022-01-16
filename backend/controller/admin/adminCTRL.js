const Admin = require("../../model/adminModel");
const Instructor = require("../../model/instructorModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminCTRL = {
  register: async (req, res) => {
    try {
      const { userName, name, mobile, email, password, rePassword } = req.body;

      if (!userName || !password || !rePassword) {
        return res.status(400).json({ msg: "Invalid Creadentials." });
      }

      const existingUser = await Admin.findOne({ userName });
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
      const newAdmin = new Admin({
        userName,
        name,
        mobile,
        email,
        password: hashPass,
      });

      await newAdmin.save();
      const accessToken = createAccessToken({ id: newAdmin._id });
      const refreshToken = createRefreshToken({ id: newAdmin._id });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        // secure: true,
        // sameSite: "none",
      });

      res.json({
        accessToken,
        user: { name: newAdmin.userName, type: newAdmin.type },
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
    jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, admin) => {
      if (err) {
        return res.status(400).json({ msg: "Please Login or Register." });
      }
      const accessToken = createAccessToken({ id: admin.id });

      res.json({ accessToken });
    });
  },
  login: async (req, res) => {
    try {
      const { userName, password } = req.body;
      if (!userName || !password) {
        return res.status(400).json({ msg: "Invalid Creadential." });
      }
      const user = await Admin.findOne({ userName });
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

      res.json({ accessToken, user: { name: user.userName, type: user.type } });
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
      const admin = await Admin.findById(req.user.id).select("-password");
      if (!admin) {
        return res.status(400).json({ msg: "User Doesn't Exists." });
      }
      res.json({ admin });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  instructorList: async (req, res) => {
    try {
      const instructors = await Instructor.find().select("-password");
      res.json({ instructors });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  updateInstructor: async (req, res) => {
    try {
      const { status } = req.body;
      await Instructor.findOneAndUpdate(
        { _id: req.params.instructor_id },
        { status }
      );
      res.json({ msg: "Updated" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

const createAccessToken = (admin) => {
  return jwt.sign(admin, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

const createRefreshToken = (admin) => {
  return jwt.sign(admin, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

module.exports = adminCTRL;
