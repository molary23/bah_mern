"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REFRESH_SECRET_KEY = exports.ACCESS_SECRET_KEY = exports.Message = exports.Err = exports.DBStatus = void 0;
var DBStatus;
(function (DBStatus) {
    DBStatus[DBStatus["a"] = 0] = "a";
    DBStatus[DBStatus["i"] = 1] = "i";
})(DBStatus = exports.DBStatus || (exports.DBStatus = {}));
exports.Err = {};
exports.Message = {};
exports.ACCESS_SECRET_KEY = process.env.ACCESS_TOKEN_SECRET_KEY;
exports.REFRESH_SECRET_KEY = process.env.REFRESH_TOKEN_SECRET_KEY;
