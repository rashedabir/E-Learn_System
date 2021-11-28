const mongoose = require("mongoose");

const parentSchema = new mongoose.Schema(
  {
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
    Address: {
      type: String,
      require: true,
    },
    image: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Parent", parentSchema);
