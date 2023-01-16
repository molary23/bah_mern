"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const credentials_1 = require("./middleware/credentials");
const corsOptions_1 = require("./util/corsOptions");
const emit_1 = require("./logger/emit");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const verifyJWT_1 = require("./middleware/verifyJWT");
const categoryRoute_1 = require("./router/api/categoryRoute");
const productRoute_1 = require("./router/api/productRoute");
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(credentials_1.credentials);
app.use((0, cors_1.default)(corsOptions_1.corsOptions));
app.use((0, express_fileupload_1.default)());
// Sync Database Relationsship
require("./util/DBRelationships");
// Use apis
app.use(verifyJWT_1.verifyJWT);
app.use("/api/category", categoryRoute_1.category);
app.use("/api/product", productRoute_1.product);
// Apis that doesn't require JWT Authentication
emit_1.myEmit.emit("log", "log event emmitted on my short code are you rotating", "error.log");
const PORT = process.env.PORT || 6001;
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
