import { createLogger, format, transports } from "winston";
import path from "path";

const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `[${level}]\t${timestamp}\t${message} `;
});

export const developmentLogger = (filepath: string = "error.log") => {
  const filename = path.join(__dirname, "/../logs", filepath);
  return createLogger({
    level: "debug",
    format: combine(
      format.colorize(),
      timestamp({
        format: "HH:mm:ss",
      }),
      myFormat
    ),
    transports: [
      new transports.Console(),
      new transports.File({
        filename,
      }),
    ],
  });
};
