"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.act = void 0;
const AuditLog_1 = require("../models/AuditLog");
const isEmpty_1 = __importDefault(require("../util/validator/isEmpty"));
const act = (table, action, itemId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    if ((0, isEmpty_1.default)(table) || (0, isEmpty_1.default)(action) || (0, isEmpty_1.default)(itemId) || (0, isEmpty_1.default)(userId)) {
        return;
    }
    try {
        yield AuditLog_1.AuditLogs.create({
            table,
            action,
            itemId,
            userId,
        });
    }
    catch (error) {
        return;
    }
});
exports.act = act;
