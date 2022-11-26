"use strict";

const jwt = require("jsonwebtoken"),
  Refresh = require("../../models/Refresh");

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const token = cookies.jwt;
  const checkToken = await Refresh.findOne({ where: { token } });
  if (!checkToken) return res.sendStatus(403);
  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET_KEY, (err, decoded) => {
    if (err || checkToken.username !== decoded.username)
      return res.sendStatus(403);
    const accessToken = jwt.sign(
      { username: decoded.username },
      process.env.ACCESS_TOKEN_SECRET_KEY,
      { expiresIn: "30s" }
    );
    res.json({ accessToken });
  });
};

module.exports = { handleRefreshToken };
