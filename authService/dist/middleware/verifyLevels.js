"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyLevels = void 0;
const verifyLevels = (...allowdLevels) => {
    return (req, res, next) => {
        if (!(req === null || req === void 0 ? void 0 : req.level))
            return res.sendStatus(401);
        const levelsArray = [...allowdLevels];
        const result = levelsArray.includes(req === null || req === void 0 ? void 0 : req.level);
        if (!result)
            return res.sendStatus(401);
        next();
    };
};
exports.verifyLevels = verifyLevels;
