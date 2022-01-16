const mongoose = require("mongoose");

const courseCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CourseCategory", courseCategorySchema);
