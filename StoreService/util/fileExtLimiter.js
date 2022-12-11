const path = require("path"),
  fileExtLimiter = (allowedExtArray, files) => {
    console.log(files);
    const fileExtension = path.extname(files.file.name);
    if (!allowedExtArray.includes(fileExtension.toLowerCase())) {
      return res.status(422).json({ message: "File extension not allowed" });
    }
  };

module.exports = fileExtLimiter;
