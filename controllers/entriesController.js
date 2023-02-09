const express = require("express");
const entries = express.Router();
const {
  getAllEntries,
  getEntry,
  createEntry,
  deleteEntry,
  updateEntry,
} = require("../queries/entries");
const {
  checkName,
  checkDate,
  checkBoolean,
} = require("../validations/checkEntries");

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
  const { id } = req.params;
  const entry = await getEntry(id);
  if (entry) {
    res.json(entry);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
entries.post("/", checkName, checkDate, checkBoolean, async (req, res) => {
  const entry = await createEntry(req.body);
  if (entry) {
    res.json(entry);
  } else {
    res.status(400).json({ error: "error" });
  }
});

// DELETE
entries.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedEntry = await deleteEntry(id);
  if (deletedEntry.id) {
    res.status(200).json(deletedEntry);
  } else {
    res.status(404).json("Bookmark not found");
  }
});

// UPDATE
entries.put("/:id", checkName, checkDate, checkBoolean, async (req, res) => {
  const { id } = req.params;
  const updatedEntry = await updateEntry(id, req.body);
  res.status(200).json(updatedEntry);
});

module.exports = entries;
