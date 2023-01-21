import { Op } from "sequelize";
import { Customers } from "../models/Customer";
import { Users } from "../models/User";
import { Categories } from "../models/Category";
import { Products } from "../models/Product";
import { Bins } from "../models/Bin";
import { UserImages } from "../models/UserImage";
import { ProductImages } from "../models/ProductImage";
import { CustomerImages } from "../models/CustomerImage";
import { CustomerProfiles } from "../models/CustomerProfile";
import { CronJob } from "cron";
import fs from "fs";
import path from "path";

const uploadDirectory = "/../../uploads/image/",
  dirPath = __dirname + uploadDirectory;

let date = new Date();
date.setDate(date.getDate() + 30);

const deleteItem = async (table: any, id: number) => {
  table
    .destroy({
      where: {
        id,
      },
    })
    .then(() => {
      Bins.destroy({
        where: {
          itemId: id,
        },
      });
    });
};

const trashItem = async (): Promise<void> => {
  const trashedItems = await Bins.findAll({
    where: {
      createdAt: { [Op.lte]: date },
    },
  });

  trashedItems.forEach((item) => {
    const { itemTable, itemId } = item;
    if (itemTable === "c") {
      CustomerProfiles.destroy({
        where: {
          CustomerId: itemId,
        },
      })
        .then(() => {
          CustomerImages.destroy({
            where: {
              CustomerId: itemId,
            },
          });
        })
        .then(() => {
          deleteItem(Categories, itemId);
        });
    } else if (itemTable === "b") {
      deleteItem(Customers, itemId);
    } else if (itemTable === "p") {
      ProductImages.findOne({
        where: {
          ProductId: itemId,
        },
      }).then((image: any) => {
        const filePath = path.join(dirPath, image?.imageName);
        try {
          fs.unlinkSync(filePath);
          deleteItem(Products, itemId);
          deleteItem(ProductImages, image?.id);
        } catch (error) {
          console.log(error);
        }
      });
    } else if (itemTable === "u") {
      UserImages.findOne({
        where: {
          UserId: itemId,
        },
      }).then((image: any) => {
        const filePath = path.join(dirPath, image?.imageName);
        try {
          fs.unlinkSync(filePath);
          deleteItem(Users, itemId);
          deleteItem(UserImages, image?.id);
        } catch (error) {
          console.log(error);
        }
      });
    }
  });
};

class Cron {
  cronJob: CronJob;

  constructor() {
    this.cronJob = new CronJob("0 0 * * *", async () => {
      try {
        await trashItem();
      } catch (error) {
        console.error(error);
      }
    });
    if (!this.cronJob.running) {
      this.cronJob.start();
    }
  }
}

const cron = new Cron();
