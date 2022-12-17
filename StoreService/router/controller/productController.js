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

const error = {},
  uploadDirectory = "/../../../uploads/image/",
  dirPath = __dirname + uploadDirectory;

const addProduct = async (req, res) => {
  const { errors, isValid } = validateAddProductInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newProduct = {},
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
  if (req.body.productDescriptionription)
    newProduct.productDescription = req.body.productDescriptionription;
  if (req.body.CategoryId) newProduct.CategoryId = req.body.CategoryId;
  newProduct.UserId = req.id;
  const fileExtension = path.extname(files.file.name),
    newImageName = `${newProduct.productName}-${newProduct.productModel}${fileExtension}`,
    filePath = path.join(dirPath, newImageName);
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
        productDescription: newProduct.productDescription,
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
  } catch (err) {
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
              { productDescription: { [Op.substring]: searchArray[i] } },
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
              { productDescription: { [Op.substring]: searchTerms } },
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
    res.status(400).json(`${error}, ${err}`);
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

const deleteProduct = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const product = await Product.update(
      {
        productStatus: "d",
      },
      {
        where: {
          id,
        },
      }
    );

    if (product) {
      const item = {
        itemId: id,
        itemTable: "p",
      };

      const trashed = Trash.create(item);
      if (trashed) {
        res.sendStatus(202);
      }
    }
  } catch (err) {
    error.delete = "Error deleting Product";
    res.status(400).json(error);
  }
};

const updateProduct = async (req, res) => {
  const newProduct = {};
  let id;
  if (req.body.productId) {
    id = req.body.productId;
  } else {
    error.update = "Product ID not specified";
    return res.status(400).json(error.update);
  }

  const { errors, isValid } = validateAddProductInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  if (req.body.CategoryId) newProduct.CategoryId = req.body.CategoryId;

  if (req.body.productName) newProduct.productName = req.body.productName;
  if (req.body.productModel) newProduct.productModel = req.body.productModel;
  if (req.body.productQuantity)
    newProduct.productQuantity = req.body.productQuantity;
  if (req.body.productDescription)
    newProduct.productDescription = req.body.productDescription;

  try {
    const checkProduct = await Product.findOne({
      where: {
        [Op.and]: {
          productName: newProduct.productName,
          productModel: newProduct.productModel,
          CategoryId: newProduct.CategoryId,
        },
      },
    });

    if (checkProduct) {
      error.duplicate =
        "File with the same name, model and category already exists";
      return res.status(419).json(error);
    }
    const updateProduct = await Product.update(newProduct, {
      where: {
        id,
      },
    });
    if (updateProduct) {
      return res.status(204).json(updateProduct);
    }
  } catch (err) {
    error.update = "Error updating product";
    return res.status(400).json(`${error}, ${err}`);
  }
};

const updateImage = async (req, res) => {
  const files = req.files,
    validate = validateImage(files);

  if (!validate.isValid) {
    return res.status(400).json(validate.errors);
  }
  const imageInfo = {};

  if (req.body.imageName) imageInfo.imageName = req.body.imageName;
  if (req.body.id) imageInfo.ProductId = req.body.id;

  if (!fs.existsSync(dirPath)) {
    fs.mkdir(dirPath, (err) => {
      if (err) return res.sendStatus(500);
    });
  }

  const filePath = path.join(dirPath, imageInfo.imageName);

  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    const image = await Image.update(
      { imageName: imageInfo.imageName },
      {
        where: {
          ProductId: imageInfo.ProductId,
        },
      }
    );

    if (image) {
      files.file.mv(filePath, (err) => {
        error.upload = "Error uploading";
        if (err) return res.status(500).json(error.upload);
      });
      return res.sendStatus(200);
    }
  } catch (err) {
    error.find = "Unable to update Image";
    res.status(400).json(`${error} , ${err}`);
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  updateImage,
};
