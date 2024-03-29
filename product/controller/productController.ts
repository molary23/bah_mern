const fs = require("fs"),
  path = require("path");
import { Products } from "../models/Product";
import ProductView from "../models/ProductView";
import { Bins } from "../models/Bin";
import { Stocks } from "../models/Stock";
import { Orders } from "../models/Order";
import { Request, Response } from "express";
import { Op } from "sequelize";
import isEmpty from "../util/validator/isEmpty";
import {
  Err as err,
  Message as message,
  IGetUserAuthInfoRequest,
  RegularObject,
  NestedRegularObject,
} from "../util/Types";
import validator from "validator";
import validateAddProductInput from "../util/validator/createProduct";
import validateImage from "../util/validator/validateImage";
import { ProductImages } from "../models/ProductImage";
import { myEmit } from "../logger/emit";
import paginate from "../util/pagination";
import { act } from "./actController";

const createProduct = async (
  req: IGetUserAuthInfoRequest | any,
  res: Response
) => {
  const { errors, isValid } = validateAddProductInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  try {
    const [found, create] = await Products.findOrCreate({
      where: {
        productName: req.body.productName,
        productModel: req.body.productModel,
        CategoryId: req.body.CategoryId,
      },
      defaults: {
        productName: req.body.productName,
        productModel: req.body.productModel,
        productDescription: req.body.productDescription,
        status: req.body.status,
        UserId: req.id,
        CategoryId: req.body.CategoryId,
      },
    });

    if (create) {
      const stock = await Stocks.create({
        ProductId: found.id,
        quantity: req.body.productQuantity,
      });
      if (stock) {
        await act("p", "a", found?.id, req.id);
        myEmit.emit(
          "log",
          `${req.url}\t${req.headers.origin}\t New Product created successfully.`,
          "product.success.log"
        );
        message.success = "Product created successfully.";
        return res.status(200).json(message);
      }
    } else {
      err.product =
        "Product with the same name, model and category already exists";
      return res.status(419).json(err);
    }
  } catch (error) {
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t New Product creation failed.`,
      "product.error.log"
    );
    return res.status(400).json(error);
  }
};

const deleteProduct = async (
  req: IGetUserAuthInfoRequest | any,
  res: Response
) => {
  const id = parseInt(req.params.id);

  try {
    const check = await Products.findOne({
      where: {
        id,
        status: "d",
      },
    });
    if (check) {
      err.message = "Product has already been deleted.";
      return res.status(202).json(err);
    }
    const deleteProduct = await Products.update(
      {
        status: "d",
      },
      {
        where: {
          id,
        },
      }
    );

    if (deleteProduct) {
      const newTrash: RegularObject | any = {
        itemId: id,
        itemTable: "p",
        UserId: req.id,
      };
      const trash = await Bins.create(newTrash);
      if (trash) {
        await act("p", "d", id, req.id);
        myEmit.emit(
          "log",
          `${req.url}\t${req.headers.origin}\t  Product deleted successfully.`,
          "product.success.log"
        );
        message.delete = "Product deleted successfully";
        return res.status(202).json(message);
      }
    }
  } catch (error) {
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t Product deletion failed.`,
      "product.error.log"
    );
    return res.status(400).json(error);
  }
};

const updateProduct = async (
  req: IGetUserAuthInfoRequest | any,
  res: Response
) => {
  const editProduct: RegularObject = {};
  const id = Number(req.params.id);

  if (isEmpty(id)) {
    err.update = "Product ID not specified";
    return res.status(400).json(err.update);
  }

  const { errors, isValid } = validateAddProductInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  if (req.body.CategoryId) editProduct.CategoryId = req.body.CategoryId;
  if (req.body.productName) editProduct.productName = req.body.productName;
  if (req.body.productModel) editProduct.productModel = req.body.productModel;
  if (req.body.productDescription)
    editProduct.productDescription = req.body.productDescription;

  try {
    const checkProduct = await Products.findOne({
      where: {
        [Op.and]: {
          productName: editProduct.productName,
          productModel: editProduct.productModel,
          CategoryId: editProduct.CategoryId,
        },
      },
    });

    if (checkProduct) {
      err.duplicate =
        "Product with the same name, model and category already exists";
      return res.status(419).json(err);
    }
    const updateProduct = await Products.update(editProduct, {
      where: {
        id,
      },
    });
    if (updateProduct) {
      await act("p", "u", id, req.id);
      myEmit.emit(
        "log",
        `${req.url}\t${req.headers.origin}\t Product updated successfully.`,
        "product.success.log"
      );
      return res.status(204).json(updateProduct);
    }
  } catch (error) {
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t Product update failed.`,
      "product.error.log"
    );
    return res.status(400).json(error);
  }
};

const updateImage = async (
  req: IGetUserAuthInfoRequest | any,
  res: Response
) => {
  const imageInfo: RegularObject = {};
  imageInfo.ProductId = Number(req.params.id);
  const files: NestedRegularObject | any = req.files,
    validate = validateImage(files);

  if (!validate.isValid) {
    return res.status(400).json(validate.errors);
  }

  if (!imageInfo.ProductId) {
    err.update = "Product ID not specified";
    return res.status(400).json(err);
  }

  if (!req.body.imageName) {
    err.update = "Image Name not specified";
    return res.status(400).json(err);
  } else {
    imageInfo.imageName = `${req.body.imageName}${path.extname(
      files.file.name
    )}`;
  }

  const uploadDirectory = "/../../../uploads/image/products/",
    dirPath = __dirname + uploadDirectory;

  if (!fs.existsSync(dirPath)) {
    fs.mkdir(dirPath, (error: any) => {
      if (error) return res.sendStatus(500);
    });
  }

  const filePath = path.join(dirPath, imageInfo.imageName);

  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    const [found, create] = await ProductImages.findOrCreate({
      where: {
        ProductId: imageInfo.ProductId,
      },
      defaults: {
        imageName: imageInfo.imageName,
      },
    });
    let image;
    if (found) {
      image = await ProductImages.update(
        { imageName: imageInfo.imageName },
        {
          where: {
            ProductId: imageInfo.ProductId,
          },
        }
      );
    }

    if (create || image) {
      await act("p", "e", imageInfo.ProductId, req.id);
      files.file.mv(filePath, (error: any) => {
        if (error) return res.sendStatus(500);
      });
      myEmit.emit(
        "log",
        `${req.url}\t${req.headers.origin}\t Product image updated successfully.`,
        "product.success.log"
      );
      return res.sendStatus(200);
    }
  } catch (error) {
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t  Product image update failed.`,
      "product.error.log"
    );
    return res.status(400).json(error);
  }
};

const restoreProduct = async (req: Request, res: Response) => {
  const id: number = Number(req?.params?.id);

  try {
    const updateProduct = await Products.update(
      {
        status: "a",
      },
      {
        where: { id },
      }
    );

    if (updateProduct) {
      const restored = await Bins.destroy({
        where: {
          itemId: id,
          itemTable: "p",
        },
      });
      if (restored) {
        message.restore = "Product successfully restored.";
        return res.status(200).json(message);
      }
    }
  } catch (error) {
    res.status(400).json(`Error: ${error}`);
  }
};

const getProduct = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const product = await ProductView.findOne({
      where: {
        id,
      },
    });
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t Product restored successfully.`,
      "product.success.log"
    );
    return res.status(200).json(product);
  } catch (error) {
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t Product restoration failed.`,
      "product.error.log"
    );
    return res.status(400).json(error);
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  const pageNumber = Number(req.query.pageNumber) || 1;
  const { offset, limit } = paginate(pageNumber, 5),
    status = req.body.status ?? "a";

  let where: RegularObject | any = { status };

  if (req.body.search) {
    const search: string = req.body.search,
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
      let searchTerms: string = searchArray[0];
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
      offset,
      limit,
    });
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t All Product selected successfully.`,
      "product.success.log"
    );
    return res.status(200).json(allProducts);
  } catch (error) {
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t All Product selection failed.`,
      "product.error.log"
    );
    return res.status(400).json(error);
  }
};

const restockProduct = async (
  req: IGetUserAuthInfoRequest | any,
  res: Response
) => {
  const { productId, productQuantity } = req.body;
  const UserId = Number(req.params.id);

  if (isEmpty(productQuantity)) {
    err.restock = "Product Quantity not specified";
    return res.status(400).json(err);
  }

  if (isEmpty(productId)) {
    err.restock = "Product ID not specified";
    return res.status(400).json(err);
  }

  try {
    const restock = await Stocks.create({
      quantity: productQuantity,
      type: "r",
      ProductId: productId,
    });
    if (restock) {
      await act("p", "r", productId, req.id);
      myEmit.emit(
        "log",
        `${req.url}\t${req.headers.origin}\t Product restocked successfully.`,
        "product.success.log"
      );
      message.success = "Product Quantity added successfully";
      return res.status(200).json(message);
    }
  } catch (error) {
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t Product restocking failed.`,
      "product.error.log"
    );
    return res.status(400).json(error);
  }
};

const orderProduct = async (
  req: IGetUserAuthInfoRequest | any,
  res: Response
) => {
  const { productId, productQuantity, comment } = req.body;
  const UserId = Number(req.params);

  if (isEmpty(productQuantity)) {
    err.order = "Product Quantity not specified";
    return res.status(400).json(err);
  }

  if (isEmpty(productId)) {
    err.order = "Product ID not specified";
    return res.status(400).json(err);
  }

  try {
    const order = await Orders.create({
      quantity: productQuantity,
      status: "a",
      ProductId: productId,
      comment,
      UserId: Number(req.params.id),
    });
    if (order) {
      await act("p", "o", productId, req.id);
      myEmit.emit(
        "log",
        `${req.url}\t${req.headers.origin}\t Product ordered successfully.`,
        "product.success.log"
      );
      message.success = "Product Quantity ordered successfully";
      return res.status(200).json(message);
    }
  } catch (error) {
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t Product ordering failed.`,
      "product.error.log"
    );
    return res.status(400).json(error);
  }
};

export {
  createProduct,
  deleteProduct,
  updateProduct,
  restoreProduct,
  getProduct,
  getAllProducts,
  updateImage,
  restockProduct,
  orderProduct,
};
