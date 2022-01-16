const Instructor = require("../../model/instructorModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authCTRL = {
  register: async (req, res) => {
    try {
      const { userName, name, mobile, email, password, rePassword, address } =
        req.body;

      if (
        !userName ||
        !name ||
        !mobile ||
        !password ||
        !rePassword ||
        !address
      ) {
        return res.status(400).json({ msg: "Invalid Creadentials." });
      }
      const existingUser = await Instructor.findOne({ userName });
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
      const newInstructor = new Instructor({
        userName,
        name,
        mobile,
        email,
        password: hashPass,
        address,
      });

      await newInstructor.save();
      const accessToken = createAccessToken({ id: newInstructor._id });
      const refreshToken = createRefreshToken({ id: newInstructor._id });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        // secure: true,
        // sameSite: "none",
      });

      res.json({
        accessToken,
        user: { name: newInstructor.name, type: newInstructor.type },
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
    jwt.verify(
      rf_token,
      process.env.REFRESH_TOKEN_SECRET,
      (err, instructor) => {
        if (err) {
          return res.status(400).json({ msg: "Please Login or Register." });
        }
        const accessToken = createAccessToken({ id: instructor.id });

        res.json({ accessToken });
      }
    );
  },
  login: async (req, res) => {
    try {
      const { userName, password } = req.body;
      if (!userName || !password) {
        return res.status(400).json({ msg: "Invalid Creadential." });
      }
      const instructor = await Instructor.findOne({ userName });
      if (!instructor) {
        return res.status(400).json({ msg: "User Doesn't Exists." });
      }
      const isMatch = await bcrypt.compare(password, instructor.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Incorrect Password." });
      }

      const accessToken = createAccessToken({ id: instructor._id });
      const refreshToken = createRefreshToken({ id: instructor._id });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        // secure: true,
        // sameSite: "none",
      });

      res.json({
        accessToken,
        user: { name: instructor.name, type: instructor.type },
      });
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
      const instructor = await Instructor.findById(req.user.id).select(
        "-password"
      );
      if (!instructor) {
        return res.status(400).json({ msg: "User Doesn't Exists." });
      }
      res.json({ instructor });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

const createAccessToken = (instructor) => {
  return jwt.sign(instructor, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

const createRefreshToken = (instructor) => {
  return jwt.sign(instructor, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

module.exports = authCTRL;
