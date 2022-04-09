const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  thumbnail: Image,
  title: String,
  content: String,
});

mongoose.model("Article", articleSchema);
