// Bring in Models
import { sequelize } from "../config/db";
import { Customers } from "../models/Customer";
import { Users } from "../models/User";
import { ProductImages } from "../models/ProductImage";
import { Products } from "../models/Product";
import { UserImages } from "../models/UserImage";
import { Categories } from "../models/Category";
import { Bins } from "../models/Bin";
import { Orders } from "../models/Order";

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

Products.hasMany(Orders, {
  onDelete: "CASCADE",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Orders.belongsTo(Products);

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
