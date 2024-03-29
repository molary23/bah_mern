import { QueryInterface } from "sequelize";

const view_name = `ProductViews`;

const original_query = `SELECT p.id AS id, p."CategoryId" AS "categoryId", c."categoryName", p."productName", p."productModel", (SELECT SUM(s.quantity) FROM "Stocks" s WHERE s."ProductId" = p.id ) AS input, (SELECT SUM(o.quantity) FROM "Orders" o WHERE o.status = 'a' AND o."ProductId" = p.id) AS output, p."productDescription", p."status", p."UserId" AS "userId", u."username" AS username FROM "Products" p JOIN "Users" u ON p."UserId" = u.id JOIN "Categories" c ON p."CategoryId" = c.id JOIN "Stocks" s ON p.id = s."ProductId" JOIN "Orders" o ON p.id = o."ProductId"`;

const new_query = `SELECT p.id AS id, p."CategoryId" AS "categoryId", c."categoryName", p."productName", p."productModel", (SELECT SUM(s.quantity) FROM "Stocks" s WHERE s."ProductId" = p.id ) AS input, (SELECT SUM(o.quantity) FROM "Orders" o WHERE o.status = 'a' AND o."ProductId" = p.id) AS output, p."productDescription", p."status", p."UserId" AS "userId", u."username" AS username FROM "Products" p JOIN "Users" u ON p."UserId" = u.id JOIN "Categories" c ON p."CategoryId" = c.id JOIN "Stocks" s ON p.id = s."ProductId" JOIN "Orders" o ON p.id = o."ProductId"`;

module.exports = {
  up: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.sequelize.query(
        `CREATE OR REPLACE VIEW ${view_name} AS ${new_query}`
      );
      await queryInterface.sequelize.query(
        `CREATE OR REPLACE VIEW ${view_name} AS ${new_query}`
      );
    }),

  down: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.sequelize.query(`DROP TABLE IF EXISTS ${view_name}`);
      await queryInterface.sequelize.query(
        `CREATE OR REPLACE VIEW ${view_name} AS ${original_query}`
      );
    }),
};
