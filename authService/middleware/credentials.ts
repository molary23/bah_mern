import { allowedOrigins } from "../util/allowedOrigins";
import { Response, NextFunction, Request } from "express";

export const credentials = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin!)) {
    res.header("Access-Control-Allow-Credentials", "true");
  }
  next();
};
