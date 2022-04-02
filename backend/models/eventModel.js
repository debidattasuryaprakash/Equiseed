const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: false,
      default: "Pending",
    },
    category: {
      type: String,
      required: false,
    },
    deadline: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    userId: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Events", EventSchema);
