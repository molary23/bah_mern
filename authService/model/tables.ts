import { connection } from "../config/db";

// Users Table
export const userTable = connection.query(
  "CREATE TABLE IF NOT EXISTS Users (UserId INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL, Email VARCHAR(50) NOT NULL UNIQUE, Username VARCHAR(30) NOT NULL UNIQUE, Phone VARCHAR(15) NOT NULL, Password VARCHAR(255) NOT NULL, Level TINYINT NOT NULL DEFAULT 1, Status  ENUM('a','i') NOT NULL, CreatedAt TIMESTAMP NOT NULL, UpdatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP())",
  function (err: never, results: string, fields: string) {
    if (err) throw err;
    console.log("Table created"); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available
  }
);

// Categories
export const categoryTable = connection.query(
  "CREATE TABLE IF NOT EXISTS Categories (CategoryId INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,  CategoryName VARCHAR(50) NOT NULL UNIQUE, Status ENUM('a','i') NOT NULL, createdAt TIMESTAMP NOT NULL, updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(), UserId INTEGER NOT NULL, FOREIGN KEY (UserId) REFERENCES Users(UserId))",
  function (err: never, results: string, fields: string) {
    if (err) throw err;
    console.log("Table created"); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available
  }
);

// Products
export const productTable = connection.query(
  "CREATE TABLE IF NOT EXISTS Products (ProductId INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,  ProductName VARCHAR(50) NOT NULL, ProductModel VARCHAR(50) NOT NULL, ProductDescription TEXT, Status ENUM('a','i') NOT NULL, createdAt TIMESTAMP NOT NULL, updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(), UserId INTEGER UNSIGNED NOT NULL, CategoryId INTEGER UNSIGNED NOT NULL, FOREIGN KEY (UserId) REFERENCES Users(UserId), FOREIGN KEY (CategoryId) REFERENCES Categories(CategoryId))",
  function (err: never, results: string, fields: string) {
    if (err) throw err;
    console.log("Table created"); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available
  }
);

// Refresh Token
export const tokenTable = connection.query(
  "CREATE TABLE IF NOT EXISTS Token (TokenId INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT  NOT NULL,  Token VARCHAR(255) NOT NULL, createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(), UserId INTEGER UNSIGNED NOT NULL, FOREIGN KEY (UserId) REFERENCES Users(UserId))",
  function (err: never, results: string, fields: string) {
    if (err) throw err;
    console.log("Table created"); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available
  }
);
