"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logEvent = void 0;
const fs = require("fs"), fsPromises = require("fs").promises, { format } = require("date-fns"), path = require("path"), { v4: uuid } = require("uuid"), RotationFileStream = require("node-rotation-file");
const logEvent = (message, fileName) => __awaiter(void 0, void 0, void 0, function* () {
    const filePath = path.join(__dirname, "/../logs", fileName), folderPath = path.join(__dirname, "/../logs/archives");
    console.log(filePath, " ", folderPath);
    const stream = new RotationFileStream({
        path: filePath,
        maxTime: "1D",
        maxSize: "10m",
        maxArchives: 14,
        archivesDirectory: folderPath,
        compressType: "gzip",
    });
    const dateTime = `${format(new Date(), "yyyy-MM-dd HH:mm:ss")}`, logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    try {
        if (!fs.existsSync(path.join(__dirname, "/../logs"))) {
            yield fsPromises.mkdir(path.join(__dirname, "/../logs"));
        }
        yield fsPromises.appendFile(path.join(__dirname, "/../logs", fileName), logItem);
    }
    catch (error) {
        console.error(error);
    }
});
exports.logEvent = logEvent;
