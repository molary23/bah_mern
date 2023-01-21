import express, { Express } from "express";

const app: Express = express();
app.use(express.urlencoded({ extended: false }));

// Sync Database Relationsship
require("./util/DBRelationships");

require("./controllers/cronController");
require("./controllers/actController");

app.get("/", (req, res) => {
  res.send("Server functional");
});

const PORT: string | number = process.env.PORT || 6004;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
