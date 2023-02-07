// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get(`/`, (req, res) => {
  res.send("Welcome to Gratitude App API");
});

// ENTRIES ROUTES
const entriesController = require("./controllers/entriesController");
app.use("/entries", entriesController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORTS
module.exports = app;
