"use strict";

const cron = require("node-cron"),
  { Op } = require("sequelize"),
  fs = require("fs"),
  path = require("path"),
  Category = require("../models/Category"),
  Trash = require("../models/Trash"),
  User = require("../models/User"),
  Image = require("../models/Image"),
  Product = require("../models/Product");

const uploadDirectory = "/../../uploads/image/",
  dirPath = __dirname + uploadDirectory;

/*
Cron for Daily Trash Check
*/

let date = new Date();
date.setDate(date.getDate() + 30);

const deleteItem = async (table, id) => {
  table
    .destroy({
      where: {
        id,
      },
    })
    .then(() => {
      Trash.destroy({
        where: {
          itemId: id,
        },
      });
    });
};

cron.schedule(
  "0 0 * * *",
  () => {
    Trash.findAll({
      where: {
        createdAt: { [Op.lte]: date },
      },
    }).then((trashed) => {
      trashed.forEach((item) => {
        const { itemTable, itemId } = item;

        if (itemTable === "c") {
          deleteItem(Category, itemId);
        } else if (itemTable === "u") {
          deleteItem(User, itemId);
        } else if (itemTable === "p") {
          Image.findOne({
            where: {
              ProductId: itemId,
            },
          }).then((image) => {
            const filePath = path.join(dirPath, image.imageName);
            try {
              fs.unlinkSync(filePath);
              deleteItem(Product, itemId);
            } catch (error) {
              console.log(error);
            }
          });
        }
      });
    });
  },
  {
    scheduled: true,
    timezone: "Africa/Lagos",
  }
);

// Delete Trash

/*if (isEmpty(req.body.id) || isEmpty(req.body.imageName)) {
  return res.sendStatus(400);
}
const { id, imageName } = req.body;

const filePath = path.join(dirPath, imageName);
try {
  fs.unlinkSync(filePath);

  const deleteProduct = await Product.destroy({
    where: {
      id,
    },
  });

  if (deleteProduct) {
    return res.sendStatus(204);
  }
} catch (err) {
  error.delete = "No Product found";
  res.status(400).json(error);
}
*/
