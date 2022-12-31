"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../model/User");
const Bin_1 = require("../model/Bin");
const Verify_1 = require("../model/Verify");
User_1.Users.hasMany(Bin_1.Bins, {
    onDelete: "RESTRICT",
    hooks: true,
    foreignKey: {
        allowNull: false,
    },
});
Bin_1.Bins.belongsTo(User_1.Users);
User_1.Users.hasOne(Verify_1.Verifies, {
    onDelete: "RESTRICT",
    hooks: true,
    foreignKey: {
        allowNull: false,
    },
});
Verify_1.Verifies.belongsTo(User_1.Users);
/*
sequelize
  .sync({ alter: true })
  .then((result: any) => {
    console.log(result);
  })
  .catch((error: never) => {
    console.log(error);
  });
*/
