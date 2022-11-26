"use strict";

const jwt = require("jsonwebtoken"),
  Refresh = require("../../models/Refresh");

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;
  const checkToken = await Refresh.findOne({
    where: { token: refreshToken },
    attributes: ["token"],
  });

  if (!checkToken) return res.sendStatus(403);
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET_KEY,
    (err, decoded) => {
      // create a RefreshView then select token form there to compare
      if (err || checkToken.username !== decoded.username)
        return res.sendStatus(403);
      const accessToken = jwt.sign(
        { username: decoded.username },
        process.env.ACCESS_TOKEN_SECRET_KEY,
        { expiresIn: "30s" }
      );
      res.json({ accessToken });
    }
  );
};

module.exports = { handleRefreshToken };
