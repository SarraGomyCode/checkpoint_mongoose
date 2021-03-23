const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/connectDB");

const app = express();
use.app("/api/contact", require("./routes/contact"));
app.use(express.json());

dbConnect();

//create routes
//middleware routing body parse

const PORT = process.env.PORT;

app.listen(5000, (err) => {
  err ? console.error(err) : console.log("server is running");
});
