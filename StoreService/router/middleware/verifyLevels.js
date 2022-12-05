const verifyLevels = (...allowdLevels) => {
  return (req, res, next) => {
    if (!req?.level) return res.sendStatus(401);
    const levelsArray = [...allowdLevels];
    const result = levelsArray.includes(req?.level);
    if (!result) return res.sendStatus(401);
    next();
  };
};
module.exports = verifyLevels;
