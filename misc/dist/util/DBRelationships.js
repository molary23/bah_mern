"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
const ProductImage_1 = require("../models/ProductImage");
const Product_1 = require("../models/Product");
const Category_1 = require("../models/Category");
const Bin_1 = require("../models/Bin");
User_1.Users.hasMany(Bin_1.Bins, {
    onDelete: "RESTRICT",
    hooks: true,
    foreignKey: {
        allowNull: false,
    },
});
Bin_1.Bins.belongsTo(User_1.Users);
User_1.Users.hasMany(Category_1.Categories, {
    onDelete: "RESTRICT",
    hooks: true,
    foreignKey: {
        allowNull: false,
    },
});
Category_1.Categories.belongsTo(User_1.Users);
User_1.Users.hasMany(Product_1.Products, {
    onDelete: "RESTRICT",
    hooks: true,
    foreignKey: {
        allowNull: false,
    },
});
Product_1.Products.belongsTo(User_1.Users);
Category_1.Categories.hasMany(Product_1.Products, {
    onDelete: "CASCADE",
    hooks: true,
    foreignKey: {
        allowNull: false,
    },
});
Product_1.Products.belongsTo(Category_1.Categories);
Product_1.Products.hasOne(ProductImage_1.ProductImages, {
    onDelete: "CASCADE",
    hooks: true,
    foreignKey: {
        allowNull: false,
    },
});
ProductImage_1.ProductImages.belongsTo(Product_1.Products);
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
