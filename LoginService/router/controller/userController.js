"use strict";

const User = require("../../models/User"),
  Trash = require("../../models/Trash"),
  { Op } = require("sequelize"),
  bcrypt = require("bcrypt"),
  isEmpty = require("../../../general/validator/isEmpty"),
  validator = require("validator"),
  validateAddUserInput = require("../../util/validator/addUser"),
  act = require("../../../MiscService/controllers/act");

const error = {};

const getAllUsers = async (req, res) => {
  let where = {};

  try {
    if (req.body.search) {
      const search = req.body.search,
        searchArray = search.split("+");
      if (searchArray.length > 1) {
        let newSearchArray = [],
          newSearchObj = {};
        for (let i = 0; i < searchArray.length; i++) {
          if (validator.isAlphanumeric(searchArray[i])) {
            newSearchObj = {
              [Op.or]: [
                { username: { [Op.substring]: searchArray[i] } },
                { email: { [Op.substring]: searchArray[i] } },
              ],
            };
          }
          newSearchArray.push(newSearchObj);
        }
        where = { ...where, ...{ [Op.and]: newSearchArray } };
      } else {
        let searchTerms = searchArray[0];
        if (validator.isAlphanumeric(searchTerms)) {
          where = {
            ...where,
            ...{
              [Op.or]: [
                { username: { [Op.substring]: searchTerms } },
                { email: { [Op.substring]: searchTerms } },
              ],
            },
          };
        }
      }
    }

    const allUsers = await User.findAndCountAll({
      where,
      attributes: ["username", "email", "phone", "id"],
    });
    res.status(200).json(allUsers);
  } catch (error) {
    res.sendStatus(400);
  }
};

const getUser = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const user = await User.findByPk(id, {
      attributes: ["id", "email", "username", "phone", "level", "status"],
    });

    res.status(200).json(user);
  } catch (err) {
    error.user = "No user found";
    res.status(400).json(error);
  }
};

const addUser = async (req, res) => {
  const newUser = {};
  let password;

  const { errors, isValid } = validateAddUserInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  if (req.body.username) newUser.username = req.body.username;
  if (req.body.email) newUser.email = req.body.email;
  if (req.body.phone) newUser.phone = req.body.phone;
  if (req.body.password) password = req.body.password;
  if (req.body.level) newUser.level = req.body.level;

  try {
    const checkUsername = await User.findOne({
      where: { username: newUser.username },
    });

    if (checkUsername) {
      error.add = "Username has been used already";
      return res.status(419).json(error);
    }

    const checkEmail = await User.findOne({
      where: { email: newUser.email },
    });

    if (checkEmail) {
      error.add = "Email address has been used already";
      return res.status(419).json(error);
    }

    newUser.password = await bcrypt.hash(password, 10);
    const user = await User.create(newUser);
    await act("u", "c", user.id, req.id);
    res.status(200).json(user);
  } catch (err) {
    error.add = "Error creating user";
    res.status(400).json(error.add);
  }
};

const updatePhone = async (req, res) => {
  const { id, phone } = req.body;

  if (isEmpty(phone)) {
    error.phone = "Phone can't be empty";
    return res.status(400).json(error.phone);
  }

  try {
    const user = await User.update(
      { phone },
      {
        where: {
          id,
        },
      }
    );
    await act("u", "t", id, req.id);
    res.status(200).json(user);
  } catch (err) {
    error.phone = "Error updating phone number";
    res.status(400).json(`${error.phone} ${err}`);
  }
};

const updatePassword = async (req, res) => {
  const { id, password } = req.body;

  if (isEmpty(password)) {
    error.password = "Password can't be empty";
    return res.status(400).json(error.password);
  }

  try {
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.update(
      { password: hashed },
      {
        where: {
          id,
        },
      }
    );
    await act("u", "s", id, req.id);
    res.status(200).json(user);
  } catch (err) {
    error.password = "Error updating password";
    res.status(400).json(error.password);
  }
};

const deleteUser = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const user = await User.update(
      {
        status: "d",
      },
      {
        where: {
          id,
        },
      }
    );

    if (user) {
      await act("u", "d", id, req.id);
      const item = {
        itemId: id,
        itemTable: "u",
      };

      const trashed = Trash.create(item);
      if (trashed) {
        res.sendStatus(202);
      }
    }
  } catch (error) {
    error.delete = "Error deleting User";
    res.status(400).json(error);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  updatePhone,
  updatePassword,
  deleteUser,
};
