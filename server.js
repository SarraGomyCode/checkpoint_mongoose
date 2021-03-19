const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/connectDB");

const app = express();

dbConnect();

//create routes
//middleware routing body parse

app.use(express.json());

use.app("/api/contact", require("./routes/contact"));

const PORT = process.env.PORT;

app.listen(5000, (err) => {
  err ? console.error(err) : console.log("server is running");
});
