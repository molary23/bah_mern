import { logEvent } from "./log";
const EventEmitter = require("events");

class MyEmmitter extends EventEmitter {}

const myEmmitter = new MyEmmitter();

export const myEmit = myEmmitter.on("log", (msg: string, fileName: string) =>
  logEvent(msg, fileName)
);
