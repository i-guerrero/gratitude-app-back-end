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

module.exports = { checkName, checkDate };
