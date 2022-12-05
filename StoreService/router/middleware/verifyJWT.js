"use strict";

const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader) return res.sendStatus(401);
  if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.username = decoded.userInfo.username;
    req.level = decoded.userInfo.level;
    req.id = decoded.userInfo.id;
    next();
  });
};

module.exports = verifyJWT;
