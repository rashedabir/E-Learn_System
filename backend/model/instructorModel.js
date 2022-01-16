const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema(
  {
    userName: {
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
    email: {
      type: String,
      trim: true,
    },
    mobile: {
      type: String,
      require: true,
      trim: true,
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
    status: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "instructor",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Instructor", instructorSchema);
