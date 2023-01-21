const fs = require("fs"),
  fsPromises = require("fs").promises,
  { format } = require("date-fns"),
  path = require("path"),
  { v4: uuid } = require("uuid"),
  RotationFileStream = require("node-rotation-file");

export const logEvent = async (message: string, fileName: string) => {
  const filePath: string = path.join(__dirname, "/../logs", fileName),
    folderPath = path.join(__dirname, "/../logs/archives");
  const stream = new RotationFileStream({
    path: filePath,
    maxTime: "1D",
    maxSize: "10m",
    maxArchives: 14,
    archivesDirectory: folderPath,
    compressType: "gzip",
  });

  const dateTime = `${format(new Date(), "yyyy-MM-dd HH:mm:ss")}`,
    logItem = `${dateTime}\t${uuid()}\t${message}\n`;

  try {
    if (!fs.existsSync(path.join(__dirname, "/../logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "/../logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "/../logs", fileName),
      logItem
    );
  } catch (error) {
    console.error(error);
  }
};
