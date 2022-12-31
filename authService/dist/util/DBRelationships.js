"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
/*
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}*/
db_1.sequelize
    .sync({ alter: true })
    .then((result) => {
    console.log(result);
})
    .catch((error) => {
    console.log(error);
});
