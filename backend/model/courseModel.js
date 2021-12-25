const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const courseSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    title: {
      type: String,
      trim: true,
      require: true,
    },
    price: {
      type: Number,
      trim: true,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    about: {
      type: String,
      require: true,
    },
    banner: {
      type: Object,
      require: true,
    },
    enrolled: {
      type: Number,
      default: 0,
    },
    objective: {
      type: Array,
      default: [],
    },
    requirements: {
      type: Array,
      default: [],
    },
    instructor: {
      type: Object,
      require: true,
    },
    comments: [commentSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);
