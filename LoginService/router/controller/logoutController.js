"use strict";

const RefreshToken = require("../../models/RefreshToken");

const handleLogOut = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);

  const refreshToken = cookies.jwt;

  const checkToken = await RefreshToken.findOne({
    where: {
      token: refreshToken,
    },
  });

  if (!checkToken) {
    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
    return res.sendStatus(204);
  }
  // Delete Token from DB
  const deleteToken = await RefreshToken.destroy({
    where: {
      token: refreshToken,
    },
  });
  res.clearCookie("jwt", {
    httpOnly: true,
    sameSite: "None",
    secure: process.env.NODE_ENV === "production",
  });
  res.sendStatus(204);
};
module.exports = { handleLogOut };
