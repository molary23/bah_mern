"use strict";

const RefreshToken = require("../../models/RefreshToken");
const User = require("../../models/User"),
  bcrypt = require("bcrypt"),
  isEmpty = require("../../../general/validator/isEmpty"),
  jwt = require("jsonwebtoken");

const error = {};

const handleLogin = async (req, res) => {
  const cookies = req.cookies,
    { username, password } = req.body;

  if (isEmpty(username)) {
    error.username = "Username is required";
    return res.status(400).json(error.username);
  }

  if (isEmpty(password)) {
    error.password = "Password is required";
    return res.status(400).json(error.password);
  }

  const user = await User.findOne({
    where: { username },
    attributes: ["level", "id", "password"],
  });

  if (!user) {
    error.username = "User not found";
    return res.status(400).json(error.username);
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    error.password = "Password is incorrect";
    return res.status(400).json(error.password);
  }

  const accessToken = jwt.sign(
    { userInfo: { username: username, level: user.level, id: user.id } },
    process.env.ACCESS_TOKEN_SECRET_KEY,
    { expiresIn: "30m" }
  );

  const newRefreshToken = jwt.sign(
    { username: username },
    process.env.REFRESH_TOKEN_SECRET_KEY,
    { expiresIn: "1d" }
  );

  if (cookies?.jwt) {
    const refreshToken = cookies.jwt;
    const foundToken = await RefreshToken.findOne({
      where: { token: refreshToken },
    });
    if (!foundToken) {
      // Delete all refresh token related to user
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
      res.clearCookie("jwt", {
        httpOnly: true,
        sameSite: "None",
        secure: process.env.NODE_ENV === "production",
      });
    } else {
      await RefreshToken.destroy({
        where: { token: refreshToken },
      });
      res.clearCookie("jwt", {
        httpOnly: true,
        sameSite: "None",
        secure: process.env.NODE_ENV === "production",
      });
    }
  }

  const refresh = await RefreshToken.create({
    UserId: user.id,
    token: newRefreshToken,
  });

  if (refresh) {
    res.cookie("jwt", newRefreshToken, {
      httpOnly: true,
      sameSite: "none",
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400000,
    });
    res.status(200).json({
      accessToken,
    });
  }
};

module.exports = { handleLogin };
