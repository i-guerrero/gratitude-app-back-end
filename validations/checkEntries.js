const checkName = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

const checkDate = (req, res, next) => {
  if (req.body.date) {
    next();
  } else {
    res.status(400).json({ error: "Date is required" });
  }
};

const checkBoolean = (req, res, next) => {
  const bool = req.body.is_favorite;
  if (
    bool == "true" ||
    bool == "false" ||
    bool == true ||
    bool == false ||
    bool == undefined
  ) {
    next();
  } else {
    res.status(400).json({ error: "Please enter a valid boolean value " });
  }
};

module.exports = { checkName, checkDate, checkBoolean };
