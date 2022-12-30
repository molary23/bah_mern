"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUser_1 = __importDefault(require("../util/validator/createUser"));
const error = {}, salt = 10;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { errors, isValid } = (0, createUser_1.default)(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    let Email = req.body.email, Username = req.body.username, Phone = req.body.phone, password = req.body.password, status = req.body.status, level = (_a = req.body.level) !== null && _a !== void 0 ? _a : 1;
    const Password = yield bcrypt_1.default.hash(password, 10);
});
/*
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
*/
