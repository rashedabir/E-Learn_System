const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    nid: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    name: {
      type: String,
      require: true,
      trim: true,
    },
    mobile: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    image: {
      type: Object,
    },
    type: {
      type: String,
      default: "student",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", studentSchema);
