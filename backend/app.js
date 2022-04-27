const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const data = [
  { name: "Huy", age: 19 },
  { name: "Tu", age: 20 },
];
app.use(cors());
app.use(morgan("common"));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.status(200).json(data);
});

app.listen(3000, () => {
  console.log("SERVER IS RUNNING !!");
});
