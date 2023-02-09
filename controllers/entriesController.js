const express = require("express");
const entries = express.Router();
const { getAllEntries } = require("../queries/entries");

// INDEX
entries.get("/", async (req, res) => {
  const allEntries = await getAllEntries();
  if (allEntries[0]) {
    res.status(200).json(allEntries);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

module.exports = entries;
