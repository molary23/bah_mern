"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Customer_1 = require("../models/Customer");
const User_1 = require("../models/User");
const Category_1 = require("../models/Category");
const Product_1 = require("../models/Product");
const Bin_1 = require("../models/Bin");
const UserImage_1 = require("../models/UserImage");
const ProductImage_1 = require("../models/ProductImage");
const CustomerImage_1 = require("../models/CustomerImage");
const CustomerProfile_1 = require("../models/CustomerProfile");
const cron_1 = require("cron");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const emit_1 = require("../logger/emit");
const uploadDirectory = "/../../uploads/image/", dirPath = __dirname + uploadDirectory;
let date = new Date();
date.setDate(date.getDate() + 30);
const deleteItem = (table, id) => __awaiter(void 0, void 0, void 0, function* () {
    table
        .destroy({
        where: {
            id,
        },
    })
        .then(() => {
        Bin_1.Bins.destroy({
            where: {
                itemId: id,
            },
        });
    })
        .then(() => {
        emit_1.myEmit.emit("log", `A ${table} item removed from Bin failed.`, "cron.log");
    });
});
const trashItem = () => __awaiter(void 0, void 0, void 0, function* () {
    const trashedItems = yield Bin_1.Bins.findAll({
        where: {
            createdAt: { [sequelize_1.Op.lte]: date },
        },
    });
    trashedItems.forEach((item) => {
        const { itemTable, itemId } = item;
        if (itemTable === "c") {
            CustomerProfile_1.CustomerProfiles.destroy({
                where: {
                    CustomerId: itemId,
                },
            })
                .then(() => {
                CustomerImage_1.CustomerImages.destroy({
                    where: {
                        CustomerId: itemId,
                    },
                });
            })
                .then(() => {
                deleteItem(Category_1.Categories, itemId);
            });
        }
        else if (itemTable === "b") {
            deleteItem(Customer_1.Customers, itemId);
        }
        else if (itemTable === "p") {
            ProductImage_1.ProductImages.findOne({
                where: {
                    ProductId: itemId,
                },
            }).then((image) => {
                const filePath = path_1.default.join(dirPath, image === null || image === void 0 ? void 0 : image.imageName);
                try {
                    fs_1.default.unlinkSync(filePath);
                    deleteItem(Product_1.Products, itemId);
                    deleteItem(ProductImage_1.ProductImages, image === null || image === void 0 ? void 0 : image.id);
                }
                catch (error) {
                    console.log(error);
                }
            });
        }
        else if (itemTable === "u") {
            UserImage_1.UserImages.findOne({
                where: {
                    UserId: itemId,
                },
            }).then((image) => {
                const filePath = path_1.default.join(dirPath, image === null || image === void 0 ? void 0 : image.imageName);
                try {
                    fs_1.default.unlinkSync(filePath);
                    deleteItem(User_1.Users, itemId);
                    deleteItem(UserImage_1.UserImages, image === null || image === void 0 ? void 0 : image.id);
                }
                catch (error) {
                    console.log(error);
                }
            });
        }
    });
});
class Cron {
    constructor() {
        this.cronJob = new cron_1.CronJob("0 0 * * *", () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield trashItem();
            }
            catch (error) {
                console.error(error);
            }
        }));
        if (!this.cronJob.running) {
            this.cronJob.start();
        }
    }
}
const cron = new Cron();
