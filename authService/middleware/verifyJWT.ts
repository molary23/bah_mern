import jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";
import { ACCESS_SECRET_KEY } from "../util/Types";
import { IGetUserAuthInfoRequest } from "../util/Types";

export const verifyJWT = async (
  req: IGetUserAuthInfoRequest | any,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader) return res.sendStatus(401);
  const authHeaderValue = authHeader as string;
  if (!authHeaderValue?.startsWith("Bearer ")) return res.sendStatus(401);

  const token = authHeaderValue.split(" ")[1];

  jwt.verify(token, ACCESS_SECRET_KEY, async (err: any, decoded: any) => {
    if (err) return res.sendStatus(403);
    req.username = decoded?.userInfo?.username;
    req.level = decoded?.userInfo?.level;
    req.id = decoded?.userInfo?.id;
    next();
  });
};
