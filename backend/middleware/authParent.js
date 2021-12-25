const Parent = require("../model/parentsModel");

const authParent = async (req, res, next) => {
  try {
    const parent = await Parent.findOne({
      _id: req.user.id,
    });
    if (!parent) {
      return res.status(400).json({ msg: "Parent Recources Access Denied" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = authParent;
