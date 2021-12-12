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

const videoSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
    },
    videos: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const taskSchema = mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

const submittedTaskSchema = mongoose.Schema(
  {
    task_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tasks",
    },
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
    videos: [videoSchema],
    comments: [commentSchema],
    tasks: [taskSchema],
    submission: [submittedTaskSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);
