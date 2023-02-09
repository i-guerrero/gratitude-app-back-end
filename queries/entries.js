const db = require("../db/dbConfig");

const getAllEntries = async () => {
  try {
    const allEntries = await db.any("SELECT * FROM entries");
    return allEntries;
  } catch (error) {
    return error;
  }
};

const getEntry = async (id) => {
  try {
    const oneEntry = await db.oneOrNone(
      "SELECT * FROM entries WHERE id = $1",
      id
    );
    return oneEntry;
  } catch (error) {
    return error;
  }
};

const createEntry = async (entry) => {
  try {
    const newEntry = db.one(
      "INSERT INTO entries (name, date, person, place, thing, notes, photo_url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        entry.name,
        entry.date,
        entry.person,
        entry.place,
        entry.thing,
        entry.notes,
        entry.photo_url,
      ]
    );
    return newEntry;
  } catch (error) {
    return error;
  }
};

const deleteEntry = async (id) => {
  try {
    const deletedEntry = await db.one(
      "DELETE FROM entries WHERE id = $1 RETURNING *",
      id
    );
    return deletedEntry;
  } catch (error) {
    return error;
  }
};

const updateEntry = async (id, entry) => {
  try {
    const updatedEntry = await db.one(
      "UPDATE entries SET name=$1, date=$2, person=$3, place=$4, thing=$5, notes=$6, photo_url=$7 WHERE id=$8 RETURNING *",
      [
        entry.name,
        entry.date,
        entry.person,
        entry.place,
        entry.thing,
        entry.notes,
        entry.photo_url,
        id,
      ]
    );
    return updatedEntry;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllEntries,
  getEntry,
  createEntry,
  deleteEntry,
  updateEntry,
};
