require("dotenv").config;
const express = require("express");
const app = express();
const port = process.env.PORT ?? 4000;
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

//middleware
app.use(morgan("dev"));
app.use(cors());

const mongoURI = process.env.mongoURI;

mongoose.connect(mongoURI, {}, () => {
  console.log("The connection with mongod is established");
});

mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("connected", () =>
  console.log("mongo connected: ", mongoURI)
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

app.get("/", (req, res) => {
  res.send({ msg: "Holidays!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
