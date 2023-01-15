import { Products } from "../models/Product";
import { Bins } from "../models/Bin";
import { Stocks } from "../models/Stock";
import { Request, Response } from "express";
import { Op } from "sequelize";
import isEmpty from "../util/validator/isEmpty";
import {
  Err as err,
  Message as message,
  IGetUserAuthInfoRequest,
  RegularObject,
  ProductObject,
} from "../util/Types";
import validator from "validator";
import validateAddProductInput from "../util/validator/createProduct";

const createProduct = async (req: Request, res: Response) => {
  const { errors, isValid } = validateAddProductInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  const newProduct: ProductObject = {
    productName: req.body.productName,
    productModel: req.body.productModel,
    productDescription: req.body.productDescription,
    status: req.body.status,
  };

  try {
    const product = await Products.create(newProduct);

    if (product) {
      const stock = await Stocks.create({
        quantity: req.body.productQuantity,
        ProductId: product.id,
      });
      if (stock) {
        message.success = "Product created successfully.";
        return res.status(200).json(message);
      }
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteProduct = async (
  req: IGetUserAuthInfoRequest | any,
  res: Response
) => {
  const id = parseInt(req.params.id);

  try {
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
        message.delete = "Product deleted successfully";
        return res.status(202).json(message);
      }
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateProduct = async (req: Request, res: Response) => {
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
      //  await act("p", "u", id, req.id);
      return res.status(204).json(updateProduct);
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

/*
const updateImage = async (req, res) => {
  const imageInfo = {};
  imageInfo.ProductId = Number(req.params.id);
  const files = req.files,
    validate = validateImage(files);

  if (!validate.isValid) {
    return res.status(400).json(validate.errors);
  }

  if (imageInfo.ProductId) {
    error.update = "Product ID not specified";
    return res.status(400).json(error);
  }

  if (req.body.imageName) {
    error.update = "Image Name not specified";
    return res.status(400).json(error);
  }

  if (req.body.imageName) imageInfo.imageName = req.body.imageName;

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
      await act("p", "e", imageInfo.ProductId, req.id);
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
};*/

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
    const product = await Products.findOne({
      where: {
        id,
      },
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
};

export {
  createProduct,
  deleteProduct,
  updateProduct,
  restoreProduct,
  getProduct,
};
