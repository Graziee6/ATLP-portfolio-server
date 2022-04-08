const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/ATLP-Portfolio", {
    useNewUrlParser: true,
  })
  .then(() => {
    const express = require("express");
    const app = express();

    app.listen(5000, () => {
      console.log("Server has started!");
    });
  });
