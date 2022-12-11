("use strict");
sequelize = require("../config/dbCon");

const auto_created_model_table_name = "ProductViews";
const view_name = "ProductViews";

const original_query = [
  "SELECT ",
  "Products.id, Products.CategoryId AS categoryId, Categories.categoryName, Products.productName, Products.productModel, Products.productQuantity, ",
  "Products.UserId AS userId, Users.username AS username, Images.imageName AS productImage ",
  "FROM Products ",
  "JOIN Users ",
  "ON Products.UserId = Users.id ",
  "JOIN Categories ",
  "ON Products.CategoryId = Categories.id ",
  "JOIN Images ",
  "ON Products.id = Images.ProductId ",
].join("");

const new_query = [
  "SELECT ",
  "Products.id, Products.CategoryId AS categoryId, Categories.categoryName, Products.productName, Products.productModel, Products.productQuantity, ",
  "Products.UserId AS userId, Users.username AS username, Images.imageName AS productImage ",
  "FROM Products ",
  "JOIN Users ",
  "ON Products.UserId = Users.id ",
  "JOIN Categories ",
  "ON Products.CategoryId = Categories.id ",
  "JOIN Images ",
  "ON Products.id = Images.ProductId ",
].join("");
module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.sequelize
        .query(`DROP TABLE IF EXISTS ${auto_created_model_table_name}`)
        .then(() => {
          queryInterface.sequelize
            .query(`CREATE OR REPLACE VIEW ${view_name} AS ${new_query}`)
            .then((result) => {
              return result;
            });
        }),
    ]);
  },
  down: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.sequelize
        .query(`DROP TABLE IF EXISTS ${auto_created_model_table_name}`)
        .then(() => {
          queryInterface.sequelize
            .query(`CREATE OR REPLACE VIEW ${view_name} AS ${original_query}`)
            .then((result) => {
              return result;
            });
        }),
    ]);
  },
};
