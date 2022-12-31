import { sequelize } from "../config/db";
import { Users } from "../model/User";
import { Bins } from "../model/Bin";
import { Verifies } from "../model/Verify";

Users.hasMany(Bins, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Bins.belongsTo(Users);

Users.hasOne(Verifies, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Verifies.belongsTo(Users);
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
