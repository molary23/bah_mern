import { sequelize } from "../config/db";
import { Customers } from "../models/Customer";
import { CustomerImages } from "../models/CustomerImage";
import { CustomerProfiles } from "../models/CustomerProfile";
import { Products } from "../models/Product";
import { Orders } from "../models/Order";
import { Stocks } from "../models/Stock";

Customers.hasOne(CustomerImages, {
  onDelete: "CASCADE",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
CustomerImages.belongsTo(Customers);

Customers.hasOne(CustomerProfiles, {
  onDelete: "CASCADE",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
CustomerProfiles.belongsTo(Customers);

Customers.hasMany(Orders, {
  onDelete: "CASCADE",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Orders.belongsTo(Customers);

Products.hasMany(Orders, {
  onDelete: "CASCADE",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Orders.belongsTo(Products);

Products.hasMany(Stocks, {
  onDelete: "RESTRICT",
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
