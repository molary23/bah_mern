import { sequelize } from "../config/db";

/*
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}*/

sequelize
  .sync({ alter: true })
  .then((result: any) => {
    console.log(result);
  })
  .catch((error: never) => {
    console.log(error);
  });
