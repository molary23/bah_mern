import { sequelize } from "../config/db";
import { Model, DataTypes } from "sequelize";

class ProductView extends Model {
  declare categoryId: number;
  declare categoryName: string;
  declare productName: string;
  declare productModel: string;
  declare productImage: string;
  declare productQuantity: number;
  declare productDescription: string;
  declare productStatus: string;
  declare userId: number;
  declare username: string;
}

ProductView.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    categoryId: DataTypes.INTEGER,
    categoryName: DataTypes.STRING,
    productName: DataTypes.STRING,
    productModel: DataTypes.STRING,
    productImage: DataTypes.STRING,
    input: DataTypes.INTEGER,
    output: DataTypes.INTEGER,
    productDescription: DataTypes.TEXT,
    productStatus: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    username: DataTypes.STRING,
  },
  {
    // don't forget to enable timestamps!
    timestamps: false,

    // I want createdAt
    createdAt: false,

    // I dont want updatedAt
    updatedAt: false,
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "ProductView", // We need to choose the model name
  }
);

//ProductView.sync = () => Promise.resolve();

//ProductView.sync({ force: true });

export default ProductView;
