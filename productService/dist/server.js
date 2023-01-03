"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
//import { credentials } from "./middleware/credentials";
//import { corsOptions as options } from "./util/corsOptions";
//import { myEmit } from "./logger/emit";
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const verifyJWT_1 = require("./middleware/verifyJWT");
const categoryRoute_1 = require("./router/api/categoryRoute");
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
//app.use(credentials);
//app.use(cors(options as CorsOptions));
app.use((0, express_fileupload_1.default)());
// Sync Database Relationsship
require("./util/DBRelationships");
// Use apis
app.use(verifyJWT_1.verifyJWT);
app.use("/api/category", categoryRoute_1.category);
// Apis that doesn't require JWT Authentication
/*myEmit.emit(
  "log",
  "log event emmitted on my short code are you rotating",
  "error.log"
);*/
app.get("/", (req, res) => {
    res.send("Server functional");
});
const PORT = process.env.PORT || 6001;
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
