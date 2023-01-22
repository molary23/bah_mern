import { QueryInterface } from "sequelize";

const view_name = `CustomerViews`;

const original_query = `SELECT c.id AS id, c."email" AS "email", c."username", c."level", c."status", p."firstName", p."lastName", p."phone", p."street", p."city", p."state", p."country" FROM "Customers" c JOIN "CustomerProfiles" p ON p."CustomerId" = c.id`;

const new_query = `SELECT c.id AS id, c."email" AS "email", c."username", c."level", c."status", p."firstName", p."lastName", p."phone", p."street", p."city", p."state", p."country" FROM "Customers" c JOIN "CustomerProfiles" p ON p."CustomerId" = c.id`;

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
