const mongoose = require("mongoose");

const submittedTaskSchema = mongoose.Schema(
  {
    student: {
      type: Object,
      required: true,
    },
    marks: {
      type: String,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const taskSchema = mongoose.Schema(
  {
    course_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      required: true,
    },
    submissions: [submittedTaskSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tasks", taskSchema);
