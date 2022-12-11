const MB = 1,
  FILE_SIZE_LIMIT = MB * 1024 * 1024,
  fileSizeLimiter = (files) => {
    if (files.file.size > FILE_SIZE_LIMIT) {
      return res.status(413).json({ message: "File size limit exceeded" });
    }
  };
module.exports = fileSizeLimiter;
