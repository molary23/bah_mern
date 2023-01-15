import { sequelize } from "../config/db";
import { Products } from "../models/Product";
import { ProductImages } from "../models/ProductImage";
import { Users } from "../models/User";
import { Bins } from "../models/Bin";
import { Categories } from "../models/Category";
import { Stocks } from "../models/Stock";

Users.hasMany(Bins, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Bins.belongsTo(Users);

Users.hasMany(Categories, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Categories.belongsTo(Users);

Users.hasMany(Products, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Products.belongsTo(Users);

Categories.hasMany(Products, {
  onDelete: "CASCADE",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Products.belongsTo(Categories);

Products.hasOne(ProductImages, {
  onDelete: "CASCADE",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
ProductImages.belongsTo(Products);

Products.hasMany(Stocks, {
  onDelete: "CASCADE",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Stocks.belongsTo(Products);

/*
sequelize
  .sync({ alter: false })
  .then((result: any) => {
    console.log(result);
  })
  .catch((error: never) => {
    console.log(error);
  });
*/
