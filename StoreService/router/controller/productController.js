"use strict";

const Product = require("../../models/Product"),
  Image = require("../../models/Image"),
  Trash = require("../../models/Trash"),
  ProductView = require("../../models/ProductView"),
  { Op } = require("sequelize"),
  fs = require("fs"),
  path = require("path"),
  validator = require("validator"),
  validateAddProductInput = require("../../util/validator/addProduct"),
  isEmpty = require("../../../general/validator/isEmpty"),
  validateImage = require("../../util/validator/validateImage");

const error = {};

const addProduct = async (req, res) => {
  const { errors, isValid } = validateAddProductInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newProduct = {},
    uploadDirectory = "/../../../uploads/image/",
    dirPath = __dirname + uploadDirectory,
    files = req.files,
    validate = validateImage(files);

  if (!validate.isValid) {
    return res.status(400).json(validate.errors);
  }

  if (!fs.existsSync(dirPath)) {
    fs.mkdir(dirPath, (err) => {
      if (err) return res.sendStatus(500);
    });
  }

  if (req.body.productName) newProduct.productName = req.body.productName;
  if (req.body.productModel) newProduct.productModel = req.body.productModel;
  if (req.body.productQuantity)
    newProduct.productQuantity = req.body.productQuantity;
  if (req.body.CategoryId) newProduct.CategoryId = req.body.CategoryId;
  newProduct.UserId = req.id;
  const fileExtension = path.extname(files.file.name),
    newImageName = `${newProduct.productName}-${newProduct.productModel}${fileExtension}`,
    filePath = path.join(__dirname, uploadDirectory, newImageName);
  try {
    const [product, created] = await Product.findOrCreate({
      where: {
        productName: newProduct.productName,
        productModel: newProduct.productModel,
      },
      defaults: {
        productName: newProduct.productName,
        productModel: newProduct.productModel,
        productQuantity: newProduct.productQuantity,
        CategoryId: newProduct.CategoryId,
        UserId: newProduct.UserId,
      },
      returning: true,
      plain: true,
    });

    if (created) {
      const image = Image.create({
        imageName: newImageName,
        ProductId: product.id,
      });
      if (image) {
        files.file.mv(filePath, (err) => {
          error.upload = "Error uploading";
          if (err) return res.status(500).json(error.upload);
        });
        return res.sendStatus(200);
      }
    } else {
      error.add = "Product Name and Model already exists";
      return res.status(419).json(error.add);
    }
  } catch (error) {
    error.add = "Error adding Product";
    res.status(400).json(`${error.add}, ${error}`);
  }
};

const getAllProducts = async (req, res) => {
  let where = {};

  if (req.body.search) {
    const search = req.body.search,
      searchArray = search.split("+");
    if (searchArray.length > 1) {
      let newSearchArray = [],
        newSearchObj = {};
      for (let i = 0; i < searchArray.length; i++) {
        if (validator.isAlphanumeric(searchArray[i])) {
          newSearchObj = {
            [Op.or]: [
              { username: { [Op.substring]: searchArray[i] } },
              { categoryName: { [Op.substring]: searchArray[i] } },
              { productName: { [Op.substring]: searchArray[i] } },
              { productModel: { [Op.substring]: searchArray[i] } },
            ],
          };
        }
        newSearchArray.push(newSearchObj);
      }
      where = { ...where, ...{ [Op.and]: newSearchArray } };
    } else {
      let searchTerms = searchArray[0];
      if (validator.isAlphanumeric(searchTerms)) {
        where = {
          ...where,
          ...{
            [Op.or]: [
              { username: { [Op.substring]: searchTerms } },
              { categoryName: { [Op.substring]: searchTerms } },
              { productName: { [Op.substring]: searchTerms } },
              { productModel: { [Op.substring]: searchTerms } },
            ],
          },
        };
      }
    }
  }

  try {
    const allProducts = await ProductView.findAndCountAll({
      where,
    });
    res.status(200).json(allProducts);
  } catch (err) {
    error.find = "No Products found";
    res.status(400).json(error);
  }
};

const getProduct = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const product = await ProductView.findOne({
      where: {
        id,
      },
    });
    res.status(200).json(product);
  } catch (err) {
    error.find = "No Product found";
    res.status(400).json(error);
  }
};

module.exports = { addProduct, getAllProducts, getProduct };
