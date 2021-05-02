require("dotenv-safe").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(`${process.env.MONGODB_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;

db.on("error", console.log.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Succesfully connected!");
});

const home = require("./routes/home");
const partners = require("./routes/partnersRoute");
// const ranking = require("./routes/rankingRoute");

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", home);
app.use("/partners", partners);
// app.use("/ranking", ranking);

module.exports = app;