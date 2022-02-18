const mongoose = require("mongoose");

const jobSeekers = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    cv: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
    },
    designation: {
      type: String,
      require: true,
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    dateFrom: {
      type: String,
      trim: true,
      required: true,
    },
    dateTo: {
      type: String,
      trim: true,
    },
    salaryFrom: {
      type: String,
      require: true,
      trim: true,
    },
    salaryTo: {
      type: String,
    },
    applied: [jobSeekers],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobSchema);
