"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookieParser = require("cookie-parser");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express_1.default.json());
// Sync Database Relationsship
require("./util/DBRelationships");
const auth = require("./router/api/authRoute"), user = require("./router/api/userRoute");
// Use apis
// Apis that doesn't require JWT Authentication
app.use("/api/auth", auth);
app.use("/api/user", user);
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
