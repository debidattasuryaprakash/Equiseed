const express = require("express");

const app = express();

app.use(express.json());

var cors = require("cors");

app.use(cors());

// Route Imports
const users = require("./routes/userRoute");

app.use("/api/v1", users);

module.exports = app;
