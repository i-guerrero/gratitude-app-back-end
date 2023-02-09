const express = require("express");
const entries = express.Router();
const { getAllEntries, getEntry, createEntry } = require("../queries/entries");
const { checkName, checkDate } = require("../validations/checkEntries");

// INDEX
entries.get("/", async (req, res) => {
  const allEntries = await getAllEntries();
  if (allEntries[0]) {
    res.status(200).json(allEntries);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
entries.get("/:id", async (req, res) => {
  const { id } = req.body;
  const entry = await getEntry(id);
  if (entry) {
    res.json(entry);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
entries.post("/", checkName, checkDate, async (req, res) => {
  const entry = await createEntry(req.body);
  if (entry) {
    res.json(entry);
  } else {
    res.status(400).json({ error: "error" });
  }
});

module.exports = entries;
