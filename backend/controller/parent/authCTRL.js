const Parent = require("../../model/parentsModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authCTRL = {
  register: async (req, res) => {
    try {
      const { nid, name, mobile, password, rePassword, address } = req.body;

      if (!nid || !name || !mobile || !password || !rePassword || !address) {
        return res.status(400).json({ msg: "Invalid Creadentials." });
      }
      const existingNid = await Parent.findOne({ nid });
      if (existingNid) {
        return res.status(400).json({ msg: "This NID Already Exists." });
      }
      const existingMobile = await Parent.findOne({ mobile });
      if (existingMobile) {
        return res
          .status(400)
          .json({ msg: "This Mobile Number Already Exists." });
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
      const newParent = new Parent({
        nid,
        name,
        mobile,
        password: hashPass,
        address,
      });

      await newParent.save();
      const accessToken = createAccessToken({ id: newParent._id });
      const refreshToken = createRefreshToken({ id: newParent._id });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        // secure: true,
        // sameSite: "none",
      });

      res.json({
        accessToken,
        user: { name: newParent.name, type: newParent.type },
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
    jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, parent) => {
      if (err) {
        return res.status(400).json({ msg: "Please Login or Register." });
      }
      const accessToken = createAccessToken({ id: parent.id });

      res.json({ accessToken });
    });
  },
  login: async (req, res) => {
    try {
      const { mobile, password } = req.body;
      if (!mobile || !password) {
        return res.status(400).json({ msg: "Invalid Creadential." });
      }
      const parent = await Parent.findOne({ mobile });
      if (!parent) {
        return res.status(400).json({ msg: "User Doesn't Exists." });
      }
      const isMatch = await bcrypt.compare(password, parent.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Incorrect Password." });
      }

      const accessToken = createAccessToken({ id: parent._id });
      const refreshToken = createRefreshToken({ id: parent._id });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        // secure: true,
        // sameSite: "none",
      });

      res.json({ accessToken, user: { name: parent.name, type: parent.type } });
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
      const parent = await Parent.findById(req.user.id).select("-password");
      if (!parent) {
        return res.status(400).json({ msg: "User Doesn't Exists." });
      }
      res.json({ parent });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

const createAccessToken = (parent) => {
  return jwt.sign(parent, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
};

const createRefreshToken = (parent) => {
  return jwt.sign(parent, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

module.exports = authCTRL;
