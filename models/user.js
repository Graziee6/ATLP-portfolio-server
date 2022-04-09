const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

mongoose.model("User", UserSchema);
