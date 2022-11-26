"use strict";

const Refresh = require("../../models/Refresh");

const handleLogOut = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);

  const refreshToken = cookies.jwt;

  const checkToken = await Refresh.findOne({
    where: {
      token: refreshToken,
    },
  });

  if (!checkToken) {
    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
    return res.sendStatus(204);
  }
  // Delete Token from DB
  const deleteToken = await Refresh.destroy({
    where: {
      token: refreshToken,
    },
  });
  res.clearCookie("jwt", {
    httpOnly: true,
    sameSite: "None",
    secure: true,
  });
  res.sendStatus(204);
};
module.exports = { handleLogOut };
