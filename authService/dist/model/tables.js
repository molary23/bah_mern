"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenTable = exports.productTable = exports.categoryTable = exports.userTable = void 0;
const db_1 = require("../config/db");
// Users Table
exports.userTable = db_1.connection.query("CREATE TABLE IF NOT EXISTS Users (UserId INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL, Email VARCHAR(50) NOT NULL UNIQUE, Username VARCHAR(30) NOT NULL UNIQUE, Phone VARCHAR(15) NOT NULL, Password VARCHAR(255) NOT NULL, Level TINYINT NOT NULL DEFAULT 1, Status  ENUM('a','i') NOT NULL DEFAULT 'a', CreatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(), UpdatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP())", function (err, results, fields) {
    if (err)
        throw err;
    console.log("Table created"); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available
});
// Categories
exports.categoryTable = db_1.connection.query("CREATE TABLE IF NOT EXISTS Categories (CategoryId INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,  CategoryName VARCHAR(50) NOT NULL UNIQUE, Status ENUM('a','i') NOT NULL, createdAt TIMESTAMP NOT NULL, updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(), UserId INTEGER NOT NULL, FOREIGN KEY (UserId) REFERENCES Users(UserId))", function (err, results, fields) {
    if (err)
        throw err;
    console.log("Table created"); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available
});
// Products
exports.productTable = db_1.connection.query("CREATE TABLE IF NOT EXISTS Products (ProductId INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,  ProductName VARCHAR(50) NOT NULL, ProductModel VARCHAR(50) NOT NULL, ProductDescription TEXT, Status ENUM('a','i') NOT NULL, createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(), updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(), UserId INTEGER UNSIGNED NOT NULL, CategoryId INTEGER UNSIGNED NOT NULL, FOREIGN KEY (UserId) REFERENCES Users(UserId), FOREIGN KEY (CategoryId) REFERENCES Categories(CategoryId))", function (err, results, fields) {
    if (err)
        throw err;
    console.log("Table created"); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available
});
// Refresh Token
exports.tokenTable = db_1.connection.query("CREATE TABLE IF NOT EXISTS Token (TokenId INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT  NOT NULL,  Token VARCHAR(255) NOT NULL, createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(), UserId INTEGER UNSIGNED NOT NULL, FOREIGN KEY (UserId) REFERENCES Users(UserId))", function (err, results, fields) {
    if (err)
        throw err;
    console.log("Table created"); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available
});
