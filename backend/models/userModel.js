const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fname: {
      type: String,
      // required: [true, "Please enter fname"],
    },
    lname: {
      type: String,
      // required: [true, "Please enter lname"],
    },
    email: {
      type: String,
      // required: [true, "Please enter e-mail"],
    },
    phoneNum: {
      type: Number,
      // required: [true, "Please enter a valid number"],
    },
    userName: {
      type: String,
      // required: [true, "Please enter a username"],
    },
    // events: [eventSchema],
    events: [
      {
        eventId: {
          type: String,
          required: false,
        },
      },
    ],
  },

  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
