import { rateLimit } from "express-rate-limit";
import { myEmit } from "../logger/emit";

export const loginLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: {
    message:
      "Too many Login attempts from this IP address, please try again later.",
  },
  handler: (req, res, next, options) => {
    myEmit.emit(
      "log",
      `Too many Requests: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
      "loginRate.log"
    );
    res.status(options.statusCode).send(options.message);
  },
  standardHeaders: true,
  legacyHeaders: true,
});
