"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const production_1 = require("./production");
const development_1 = require("./development");
let logger = null;
exports.logger = logger;
if (process.env.NODE_ENV === "production") {
    exports.logger = logger = (0, production_1.productionLogger)();
}
else if (process.env.NODE_ENV !== "development") {
    exports.logger = logger = (0, development_1.developmentLogger)();
}
