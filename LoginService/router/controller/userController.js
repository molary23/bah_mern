"use strict";

const User = require("../../models/User"),
  bcrypt = require("bcrypt"),
  validateAddUserInput = require("../validator/addUser");

const error = {};

const getAllUsers = async (req, res) => {
  const allUsers = await User.findAll();
  res.status(200).json(allUsers);
};

const getUser = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const user = await User.findByPk(id);
    const userInfo = (({ id, email, username, phone, level, status }) => ({
      id,
      email,
      username,
      phone,
      level,
      status,
    }))(user);
    res.status(200).json(userInfo);
  } catch (err) {
    error.user = "No user found";
    res.status(400).json(error);
  }
};

const addUser = async (req, res) => {
  const newUser = {};
  let password;
  if (req.body.username) newUser.username = req.body.username;
  if (req.body.email) newUser.email = req.body.email;
  if (req.body.phone) newUser.phone = req.body.phone;
  if (req.body.password) password = req.body.password;
  if (req.body.level) newUser.level = req.body.level;

  const { errors, isValid } = validateAddUserInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  try {
    newUser.password = await bcrypt.hash(password, 10);
    const user = await User.create(newUser);
    res.status(200).json(user);
  } catch (error) {
    error.addUser = "Error creating user";
    res.status(400).json(error.add);
  }
};

const updateUser = async (req, res) => {
  const { id, username, password, phone } = req.body;
};

module.exports = { getAllUsers, getUser, addUser };
