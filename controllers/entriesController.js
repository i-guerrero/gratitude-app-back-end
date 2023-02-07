const express = require("express");
const entries = express.Router();

entries.get("/", (req, res) => {
  res.send("Entries");
});

module.exports = entries;
