"use strict";

const jwt = require("jsonwebtoken"),
  Refresh = require("../../models/Refresh"),
  User = require("../../models/User");

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;
  const checkToken = await Refresh.findOne({
    where: { token: refreshToken },
    attributes: ["token"],
    include: [
      {
        model: User,
        attributes: ["username", "level"],
        required: true,
      },
    ],
  });

  if (!checkToken) return res.sendStatus(403);
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET_KEY,
    (err, decoded) => {
      if (err || checkToken.User.username !== decoded.userInfo.username)
        return res.sendStatus(403);
      const accessToken = jwt.sign(
        { username: decoded.userInfo.username, level: checkToken.User.level },
        process.env.ACCESS_TOKEN_SECRET_KEY,
        { expiresIn: "3m" }
      );
      res.json({ accessToken });
    }
  );
};

module.exports = { handleRefreshToken };
