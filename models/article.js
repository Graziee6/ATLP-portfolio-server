const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  // thumbnail: File,
  title: String,
  content: String,
});

module.exports = mongoose.model("Article", articleSchema);
