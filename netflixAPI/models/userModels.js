const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // email: {
  //   type: String,
  //   required: true,
  //   unique: true,
  //   max: 50,
  // },
  email: { type: String, required: true, unique: true },
  likedMovies: { type: Array, default: [] },
});

module.exports = mongoose.model("User", userSchema);
