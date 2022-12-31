import { Response, NextFunction } from "express";

export const verifyLevels = (...allowdLevels: string[]) => {
  return (req: any, res: Response, next: NextFunction) => {
    if (!req?.level) return res.sendStatus(401);
    const levelsArray = [...allowdLevels];
    const result = levelsArray.includes(req?.level);
    if (!result) return res.sendStatus(401);
    next();
  };
};
