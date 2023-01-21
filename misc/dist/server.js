"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false }));
// Sync Database Relationsship
require("./util/DBRelationships");
require("./controllers/cronController");
require("./controllers/actController");
app.get("/", (req, res) => {
    res.send("Server functional");
});
const PORT = process.env.PORT || 6004;
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
