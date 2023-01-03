import { Request, Response, NextFunction } from "express";
import { IGetUserAuthInfoRequest } from "../util/Types";

export const verifyLevels = (allowdLevels: string[] | any[]) => {
  return (
    req: IGetUserAuthInfoRequest | any,
    res: Response,
    next: NextFunction
  ) => {
    if (!req?.level) return res.sendStatus(401);
    const levelsArray = [...allowdLevels];
    const result = levelsArray.includes(req?.level);
    if (!result) return res.sendStatus(401);
    next();
  };
};
