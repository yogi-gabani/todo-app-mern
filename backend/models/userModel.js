const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add the user name."],
    },
    email: {
      type: String,
      required: [true, "Please add the user's email address."],
      unique: [true, "Email Address Already Taken/Exist!"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password."],
    },
    token: {
      type: String,
    },
    avatarPic: {
      type: String,
      required: [false],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
