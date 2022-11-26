"use strict";

const RefreshToken = require("../../models/Refresh");
const User = require("../../models/User"),
  bcrypt = require("bcrypt"),
  isEmpty = require("../validator/isEmpty"),
  jwt = require("jsonwebtoken");

const error = {};

const handleLogin = async (req, res) => {
  const { username, password } = req.body;

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
    { username: username, level: user.level },
    process.env.ACCESS_TOKEN_SECRET_KEY,
    { expiresIn: "30s" }
  );

  const refreshToken = jwt.sign(
    { username: username },
    process.env.ACCESS_TOKEN_SECRET_KEY,
    { expiresIn: "30s" }
  );

  const refresh = await RefreshToken.create({
    UserId: user.id,
    token: JSON.stringify(refreshToken),
  });

  if (refresh) {
    res.cookie("jwt", refreshToken, {
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
