import { sequelize } from "../config/db";
import { Users } from "../models/User";
import { Bins } from "../models/Bin";
import { Verifies } from "../models/Verify";
import { UserImages } from "../models/UserImage";

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

Users.hasOne(UserImages, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
UserImages.belongsTo(Users);

/*
sequelize
  .sync({ alter: false })
  .then((result: any) => {
    console.log(result);
  })
  .catch((error: never) => {
    console.log(error);
  });*/
