"use strict";

const jwt = require("jsonwebtoken"),
  RefreshToken = require("../../models/RefreshToken"),
  User = require("../../models/User");

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;
  res.clearCookie("jwt", {
    httpOnly: true,
    sameSite: "None",
    secure: process.env.NODE_ENV !== "production",
  });
  const checkToken = await RefreshToken.findOne({
    where: { token: refreshToken },
    attributes: ["token", "UserId"],
    include: [
      {
        model: User,
        attributes: ["username", "level"],
        required: true,
      },
    ],
  });

  if (!checkToken) {
    // Reuse of Refresh token
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET_KEY,
      async (err, decoded) => {
        if (err) return res.sendStatus(403);
        const hackedUser = await User.findOne({
          where: { username: decoded.username },
          attributes: ["id"],
        });

        await RefreshToken.destroy({
          where: { UserId: hackedUser.id },
        });

        return res.sendStatus(403);
      }
    );
  } else {
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET_KEY,
      async (err, decoded) => {
        if (err) {
          const deleteToken = await RefreshToken.destroy({
            where: {
              token: refreshToken,
            },
          });
        }

        if (err || checkToken.User.username !== decoded.username)
          return res.sendStatus(403);
        const accessToken = jwt.sign(
          {
            userInfo: {
              username: decoded.username,
              level: checkToken.User.level,
              id: checkToken.UserId,
            },
          },
          process.env.ACCESS_TOKEN_SECRET_KEY,
          { expiresIn: "3m" }
        );
        const newRefreshToken = jwt.sign(
          { username: checkToken.User.username },
          process.env.REFRESH_TOKEN_SECRET_KEY,
          { expiresIn: "1d" }
        );

        const refresh = await RefreshToken.create({
          UserId: checkToken.UserId,
          token: newRefreshToken,
        });

        if (refresh) {
          res.cookie("jwt", newRefreshToken, {
            httpOnly: true,
            sameSite: "none",
            secure: process.env.NODE_ENV === "production",
            maxAge: 86400000,
          });
        }

        res.json({ accessToken });
      }
    );
  }
};

module.exports = { handleRefreshToken };
