const filePayLoadExists = (files) => {
  if (files) return res.status(400).json({ message: "Missing File" });
};

module.exports = filePayLoadExists;
