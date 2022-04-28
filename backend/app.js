const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
dotenv.config();
const app = express();

// CONNECT DATABASE
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("CONNECTION IS OPEN"))
  .catch((err) => console.log(err))
  
app.use(cors());
app.use(morgan("common"));
app.use(bodyParser.json());

// ROUTES

app.listen(process.env.PORT, () => {
  console.log("SERVER IS RUNNING !!");
});
