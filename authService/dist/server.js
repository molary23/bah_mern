"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cookieParser = require("cookie-parser");
const cors_1 = __importDefault(require("cors"));
const credentials_1 = require("./middleware/credentials");
const corsOptions_1 = require("./util/corsOptions");
const emit_1 = require("./logger/emit");
const fileUpload = require("express-fileupload");
const userRoute_1 = require("./router/api/userRoute");
const authRoute_1 = require("./router/api/authRoute");
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express_1.default.json());
app.use(credentials_1.credentials);
app.use((0, cors_1.default)(corsOptions_1.corsOptions));
app.use(fileUpload());
// Sync Database Relationsship
require("./util/DBRelationships");
// Require Api
// Use apis
// Apis that doesn't require JWT Authentication
app.use("/api/auth", authRoute_1.auth);
app.use("/api/user", userRoute_1.user);
emit_1.myEmit.emit("log", "log event emmitted on my short code are you rotating", "error.log");
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
