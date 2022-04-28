const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
dotenv.config();
const data = [
  { name: "Huy", age: 19 },
  { name: "Tu", age: 20 },
];
app.use(cors());
app.use(morgan("common"));
app.use(bodyParser.json());
// Connect mongodb cloud db
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("CONNECTION IS OPEN"))
  .catch((err) => console.log(err))
  
app.listen(8080, () => {
  console.log("SERVER IS RUNNING !!");
});
