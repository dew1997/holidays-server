require("dotenv").config;
const express = require("express");
const app = express();
const port = process.env.PORT ?? 4000;
const morgan = require("morgan");
const mongoose = require("mongoose");

app.use(morgan("dev"));

mongoURI = process.env.mongoURI;

mongoose.connect(mongoURI, {}, () => {
  console.log("The connection with mongod is established");
});

app.get("/", (req, res) => {
  res.send({ msg: "Holidays!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
