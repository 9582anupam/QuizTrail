const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes");

require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1", routes);

module.exports = app;
